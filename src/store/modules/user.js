const state = {
  isAuthenticated: false,
  navStatus: 0,
};
const getters = {
  user: (state) => state.isAuthenticated,
  navState: (state) => state.navStatus
}

const actions = {
  login ({commit}) {
    commit('SET_SESSION', true)
  },
  logout ({commit}) {
    commit('SET_SESSION', false)
  },
  closeNav ({commit}) {
    commit('SET_CLOSE_NAV', 10)
  }
}

const mutations = {
  SET_SESSION: (state, isAuthenticated) => (state.isAuthenticated = isAuthenticated),
  SET_CLOSE_NAV: (state, payload) => (state.navStatus += payload),
}

export default {
  state,
  getters,
  actions,
  mutations
}