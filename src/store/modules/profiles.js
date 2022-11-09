import Client from '../../contentful'
import * as contentful from 'contentful-management'
const contentType = 'application/pdf';
var client = contentful.createClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
})

const state = {
  profiles: [],
  asset: {},
  assets:[]
};
const getters = {
  allProfiles: (state) => state.profiles,
  // asset: (state) => state.asset,
  // assets: (state) => state.assets
};
const actions = {
  async fetchProfiles({commit, dispatch}) {
    const response = await Client.getEntries({
      content_type: "teachersProfiles"
    })
    let formattedProfiles = response.items.map(profile => {
      let imageUrl = profile.fields.profilePicture.fields.file.url
      let formattedProfile = {...profile.fields,...profile.sys,imageUrl}
      return formattedProfile
    })

    commit('setProfiles', formattedProfiles)
    // dispatch('fetchAssets')
  },
  async fetchAssets({commit}) {
    const response = await Client.getAssets()
    commit('setAssets', response.items)
  },
  uploadCv({commit, dispatch}, file) {
    return new Promise ((resolve, reject) => {
        client.getSpace(process.env.VUE_APP_SPACE)
        .then((space) => space.getEnvironment('master-2020-10-14'))
        .then((environment) => environment.createAssetFromFiles({
          fields: {
            title: {
              'en-US': file.fullName
            },
            description: {
              'en-US': file.description
            },
            file: {
              'en-US': {
                contentType,
                fileName: file.name,
                file
              }
            }
          }
        }))
        .then((asset) => asset.processForAllLocales())
        .then((asset) => asset.publish())
        .then((asset) => {
          commit('setAsset', asset)
          client.getSpace(process.env.VUE_APP_SPACE)
            .then((space) => space.getEnvironment('master-2020-10-14'))
            .then((environment) => environment.getEntry(file.entryId))
            .then((entry) => {
              // assign uploaded image as an entry field
              const newCV = {"sys": {"id": asset.sys.id, "linkType": "Asset", "type": "Link"}}
              entry.fields["resumes"]["en-US"].push(newCV)
              return entry.update()
            }).then ((entry) => {
              entry.publish()
              dispatch('fetchJobs')
              resolve(entry)
            })
        })
        .catch(error => {reject(error)})
    })

  },
  uploadVideo({commit, dispatch}, file) {
    return new Promise ((resolve, reject) => {
        client.getSpace(process.env.VUE_APP_SPACE)
        .then((space) => space.getEnvironment('master-2020-10-14'))
        .then((environment) => environment.createAssetFromFiles({
          fields: {
            title: {
              'en-US': file.fullName
            },
            description: {
              'en-US': file.description
            },
            file: {
              'en-US': {
                contentType: "video/mp4",
                fileName: file.name,
                file
              }
            }
          }
        }))
        .then((asset) => asset.processForAllLocales())
        .then((asset) => asset.publish())
        .then((asset) => {
          commit('setAsset', asset)
          client.getSpace(process.env.VUE_APP_SPACE)
            .then((space) => space.getEnvironment('master-2020-10-14'))
            .then((environment) => environment.getEntry(file.entryId))
            .then((entry) => {
              // assign uploaded image as an entry field
              const newVideo = {"sys": {"id": asset.sys.id, "linkType": "Asset", "type": "Link"}}
              entry.fields["videos"]["en-US"].push(newVideo)
              return entry.update()
            }).then ((entry) => {
              entry.publish()
              dispatch('fetchJobs')
              resolve(entry)
            })
        })
        .catch(error => {reject(error)})
    })
  },
  updateView ({commit, dispatch},entryId) {
    client.getSpace(process.env.VUE_APP_SPACE)
      .then((space) => space.getEnvironment('master-2020-10-14'))
      .then((environment) => environment.getEntry(entryId))
      .then((entry) => {
        // assign uploaded image as an entry field
        let currentViews = entry.fields["views"]["en-US"]
        entry.fields["views"]["en-US"] = currentViews + 1
        return entry.update()
      }).then ((entry) => {
        entry.publish()
        dispatch('fetchJobs')
        resolve(entry)
      })
  }
};
const mutations = {
  setProfiles: (state, profiles) => (state.profiles = profiles),
  // setAsset: (state, asset) => (state.asset = asset),
  // setAssets: (state, assets) => (state.assets = assets)
};


export default {
  state,
  getters,
  actions,
  mutations
}