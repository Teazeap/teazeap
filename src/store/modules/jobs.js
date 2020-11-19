import Client from '../../contentful'
import * as contentful from 'contentful-management'
const contentType = 'application/pdf';
var client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: 'CFPAT-p9feBff9O0kxcpoMK0RdpJDxFCb0thB1LaqCuENBCAI',
})

const state = {
  jobs: [],
  asset: {},
  assets:[]
};
const getters = {
  allJobs: (state) => state.jobs,
  asset: (state) => state.asset,
  assets: (state) => state.assets
};
const actions = {
  async fetchJobs({commit, dispatch}) {
    const response = await Client.getEntries({
      content_type: "teachingJobs"
    })
    let formattedJobs = response.items.map(job => {
      let imageUrl = job.fields.images.map(image => image.fields.file.url)
      let formattedJob = {...job.fields,...job.sys,imageUrl}
      return formattedJob
    })
    commit('setJobs', formattedJobs)
    dispatch('fetchAssets')
  },
  async fetchAssets({commit}) {
    const response = await Client.getAssets()
    commit('setAssets', response.items)
  },
  uploadCv({commit, dispatch}, file) {
    return new Promise ((resolve, reject) => {
        client.getSpace('dr15y1pi2yc9')
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
          client.getSpace('dr15y1pi2yc9')
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
        client.getSpace('dr15y1pi2yc9')
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
          client.getSpace('dr15y1pi2yc9')
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
  }
};
const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs),
  setAsset: (state, asset) => (state.asset = asset),
  setAssets: (state, assets) => (state.assets = assets)
};


export default {
  state,
  getters,
  actions,
  mutations
}