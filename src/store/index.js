import Vuex from 'vuex';
import Vue from 'vue';
import jobs from './modules/jobs';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jobs,
    user
  }
})