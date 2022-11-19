const ContentfulConfig = require("../../contentful-config");
import { createClient } from "contentful";
import * as contentful from "contentful-management";
const contentType = "application/pdf";
var client = contentful.createClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN
});

let config = ContentfulConfig.getConfig(true);
// cdn.contentful.com
config = ContentfulConfig.getConfig(false);
const Client = createClient(config);

// preview.contentful.com
config = ContentfulConfig.getConfig(true);
const PreviewClient = createClient(config);

const state = {
  jobs: [],
  previewJobs: [],
  asset: {},
  assets: []
};
const getters = {
  allJobs: state => state.jobs,
  asset: state => state.asset,
  assets: state => state.assets
};
const actions = {
  async fetchJobs({ commit, dispatch }) {
    const response = await Client.getEntries({
      content_type: "teachingJobs"
    });
    let formattedJobs = response.items.map(job => {
      let imageUrl = job.fields.images.map(image => image.fields.file.url);
      let formattedJob = { ...job.fields, ...job.sys, imageUrl };
      return formattedJob;
    });
    commit("setJobs", formattedJobs);
    dispatch("fetchAssets");
  },
  async fetchPreviewJobs({ commit, dispatch }) {
    const response = await PreviewClient.getEntries({
      content_type: "teachingJobs"
    });
    let formattedJobs = response.items.map(job => {
      let imageUrl = job.fields.images.map(image => image.fields.file.url);
      let formattedJob = { ...job.fields, ...job.sys, imageUrl };
      return formattedJob;
    });
    commit("setPreviewJobs", formattedJobs);
  },
  async fetchAssets({ commit }) {
    const response = await Client.getAssets();
    commit("setAssets", response.items);
  },
  uploadCv({ commit, dispatch }, file) {
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
          commit("setAsset", asset);
          client
            .getSpace(process.env.VUE_APP_SPACE)
            .then(space => space.getEnvironment(config.environment))
            .then(environment => environment.getEntry(file.entryId))
            .then(entry => {
              // assign uploaded image as an entry field
              const newCV = {
                sys: { id: asset.sys.id, linkType: "Asset", type: "Link" }
              };
              entry.fields["resumes"]["en-US"].push(newCV);
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
  setJobs: (state, jobs) => (state.jobs = jobs),
  setPreviewJobs: (state, previewJobs) => (state.previewJobs = previewJobs),
  setAsset: (state, asset) => (state.asset = asset),
  setAssets: (state, assets) => (state.assets = assets)
};

export default {
  state,
  getters,
  actions,
  mutations
};
