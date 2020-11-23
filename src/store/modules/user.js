const state = {
  isAuthenticated: false
};
const getters = {
  user: (state) => state.isAuthenticated
}

const actions = {
  login ({commit}) {
    commit('SET_SESSION', true)
  },
  logout ({commit}) {
    commit('SET_SESSION', false)
  }
}

const mutations = {
  SET_SESSION: (state, isAuthenticated) => (state.isAuthenticated = isAuthenticated)
}

export default {
  state,
  getters,
  actions,
  mutations
}