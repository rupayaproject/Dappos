import menulist from './menulist'

let initialState = function () {
  return {
    user: null,
  }
}

export default {
  namespaced: true,
  modules: { menulist },
  state: initialState(),
  mutations:
  {
    resetStateData (state) {
      let newState = initialState()
      Object.assign(state, newState)
    },
    updateState (state, payload) {
      Object.keys(payload).forEach(key => {
        Vue.set(state, key, payload[key])
      })
    }
  },
  actions:
  {
    doIt ({state, getters, rootState, rootGetters, commit, dispatch},
    {id} = {}) {
      // getters.someOtherGetter // -> 'foo/someOtherGetter'
      // rootGetters.someOtherGetter // -> 'someOtherGetter'

      dispatch('someOtherAction') // -> 'foo/someOtherAction'
      dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

      commit('someMutation') // -> 'foo/someMutation'
      commit('someMutation', null, { root: true }) // -> 'someMutation'
    }
  },
  getters:
  {
    isLoggedIn: (state, getters, rootState, rootGetters) => {
      return true
    },
  }
}
