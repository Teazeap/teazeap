import * as contentful from "contentful-management";
import { createClient } from "contentful";
const ContentfulConfig = require("../../contentful-config");

const contentType = "application/pdf";
let config = ContentfulConfig.getConfig(true);
var client = contentful.createClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
});

// cdn.contentful.com
config = ContentfulConfig.getConfig(false);
const Client = createClient(config);

// preview.contentful.com
config = ContentfulConfig.getConfig(true);
const PreviewClient = createClient(config);

const state = {
  profiles: [],
  previewProfiles: [],
  asset: {},
  assets: []
};
const getters = {
  allProfiles: state => state.profiles,
  allPreviewProfiles: state => state.previewProfiles
};
const actions = {
  async fetchProfiles({ commit, dispatch }) {
    const response = await Client.getEntries({
      content_type: "teachersProfiles"
    });
    let formattedProfiles = response.items.map(profile => {
      let imageUrl = profile.fields.profilePicture.fields.file.url;
      let formattedProfile = { ...profile.fields, ...profile.sys, imageUrl };
      return formattedProfile;
    });

    commit("setProfiles", formattedProfiles);
  },
  async fetchPreviewProfiles({ commit, dispatch }) {
    const response = await PreviewClient.getEntries({
      content_type: "teachersProfiles"
    });
    let formattedProfiles = response.items.map(profile => {
      let imageUrl = profile.fields.profilePicture.fields.file.url;
      let formattedProfile = { ...profile.fields, ...profile.sys, imageUrl };
      return formattedProfile;
    });

    commit("setPreviewProfiles", formattedProfiles);
  },
  async addProfile({ commit, dispatch }, profile) {
    // Create profile
    const {
      firstName,
      lastName,
      email,
      entryId,
      gender,
      birthDate,
      hasCertificate,
      country,
      teachingExperience,
      yearsInTaiwan,
      description,
      uploadedCvAsset,
      uploadedProfilePictureAsset
    } = profile;

    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment =>
          environment.createEntryWithId("teachersProfiles", entryId, {
            fields: {
              firstName: {
                "en-US": firstName
              },
              lastName: {
                "en-US": lastName
              },
              email: {
                "en-US": email
              },
              gender: {
                "en-US": gender
              },
              country: {
                "en-US": [country]
              },
              teachingExperience: {
                "en-US": teachingExperience
              },
              yearsInTaiwan: {
                "en-US": yearsInTaiwan
              },
              birthDate: {
                "en-US": birthDate
              },
              description: {
                "en-US": description
              },
              hasCertificate: {
                "en-US": hasCertificate
              },
              resumes: {
                "en-US": [
                  {
                    sys: {
                      id: uploadedCvAsset.sys.id,
                      linkType: "Asset",
                      type: "Link"
                    }
                  }
                ]
              },
              profilePicture: {
                "en-US": {
                  sys: {
                    id: uploadedProfilePictureAsset.sys.id,
                    linkType: "Asset",
                    type: "Link"
                  }
                }
              }
            }
          })
        )
        .then(entry => {
          resolve(entry);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async publishProfile({ commit, dispatch }, entryId) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment => environment.getEntry(entryId))
        .then(entry => entry.publish())
        .then(entry => {
          dispatch('fetchProfiles')
          dispatch('fetchPreviewProfiles')
          resolve(entry);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async unPublishProfile({ commit, dispatch }, entryId) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment => environment.getEntry(entryId))
        .then(entry => entry.unpublish())
        .then(entry => {
          dispatch('fetchProfiles')
          dispatch('fetchPreviewProfiles')
          resolve(entry);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async fetchAssets({ commit }) {
    const response = await Client.getAssets();
    commit("setAssets", response.items);
  },
  uploadProfileAsset({ commit, dispatch }, file) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment =>
          environment.createAssetFromFiles({
            fields: {
              title: {
                "en-US": file.fullName
              },
              description: {
                "en-US": file.description
              },
              file: {
                "en-US": {
                  contentType,
                  fileName: file.name,
                  file
                }
              }
            }
          })
        )
        .then(asset => asset.processForAllLocales())
        .then(asset => asset.publish())
        .then(asset => {
          resolve(asset);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  uploadVideo({ commit, dispatch }, file) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment =>
          environment.createAssetFromFiles({
            fields: {
              title: {
                "en-US": file.fullName
              },
              description: {
                "en-US": file.description
              },
              file: {
                "en-US": {
                  contentType: "video/mp4",
                  fileName: file.name,
                  file
                }
              }
            }
          })
        )
        .then(asset => asset.processForAllLocales())
        .then(asset => asset.publish())
        .then(asset => {
          commit("setAsset", asset);
          client
            .getSpace(process.env.VUE_APP_SPACE)
            .then(space => space.getEnvironment(config.environment))
            .then(environment => environment.getEntry(file.entryId))
            .then(entry => {
              // assign uploaded image as an entry field
              const newVideo = {
                sys: { id: asset.sys.id, linkType: "Asset", type: "Link" }
              };
              entry.fields["videos"]["en-US"].push(newVideo);
              return entry.update();
            })
            .then(entry => {
              entry.publish();
              dispatch("fetchJobs");
              resolve(entry);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateView({ commit, dispatch }, entryId) {
    client
      .getSpace(process.env.VUE_APP_SPACE)
      .then(space => space.getEnvironment(config.environment))
      .then(environment => environment.getEntry(entryId))
      .then(entry => {
        // assign uploaded image as an entry field
        let currentViews = entry.fields["views"]["en-US"];
        entry.fields["views"]["en-US"] = currentViews + 1;
        return entry.update();
      })
      .then(entry => {
        entry.publish();
        dispatch("fetchJobs");
        resolve(entry);
      });
  }
};
const mutations = {
  setProfiles: (state, profiles) => (state.profiles = profiles),
  setPreviewProfiles: (state, previewProfiles) =>
    (state.previewProfiles = previewProfiles)
};

export default {
  state,
  getters,
  actions,
  mutations
};
