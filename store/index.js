import axios from 'axios'

export const state = () => ({
  apiUrl: 'http://localhost:4000/docs/',
  locale: 'en',
  changelog: []
})

export const getters = {
  getLatestVersion: state => state.changelog[0].tag_name
}

export const mutations = {
  setApiUrl(state, apiUrl) {
    state.apiUrl = apiUrl
  },
  setLocale(state, locale) {
    state.locale = locale
  },
  setChangelog(state, changelog) {
    state.changelog = changelog
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let res = null
    try {
      res = await axios.get(
        'https://api.github.com/repos/sarahdayan/dinero.js/releases'
      )
    } catch (err) {
      throw err
    }
    commit('setChangelog', res.data)
  }
}
