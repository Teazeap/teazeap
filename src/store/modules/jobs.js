import axios from 'axios';
import Client from '../../contentful'

const state = {
  jobs: []
};
const getters = {
  allJobs: (state) => state.jobs
};
const actions = {
  async fetchJobs({commit}) {
    const response = await Client.getEntries({
      content_type: "teachingJobs"
    })
    let formattedJobs = response.items.map(job => {
      let imageUrl = job.fields.images.map(image => image.fields.file.url)
      let formattedJob = {...job.fields,...job.sys,imageUrl}
      return formattedJob
    })
    console.log(formattedJobs);
    commit('setJobs', formattedJobs)
  }
};
const mutations = {
  setJobs: (state, jobs) => (state.jobs = jobs)
};


export default {
  state,
  getters,
  actions,
  mutations
}