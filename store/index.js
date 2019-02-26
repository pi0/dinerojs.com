import axios from 'axios'

const apiUrl = 'http://localhost:4000/docs/'
const githubApiUrl = 'https://api.github.com/repos/sarahdayan/dinero.js/releases'

export const state = () => ({
  apiUrl,
  locale: 'en',
  changelog: []
})

export const getters = {
  latestVersion: state => state.changelog[0].tag_name,
  routesFromEndpoints: state =>
    Object.entries(state.endpoints).map(endpoint =>
      endpoint[1].replace(
        /(https?:\/\/[a-z0-9.]{1,}:[0-9]{1,}\/docs\/[a-z]{1,}\/)/,
        ''
      )
    )
}

export const mutations = {
  setChangelog(state, changelog) {
    state.changelog = changelog
  },
  setEndpoints(state, endpoints) {
    state.endpoints = endpoints
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let changelog = null
    let endpoints = null
    try {
      changelog = await axios.get(githubApiUrl)
      endpoints = await axios.get(apiUrl)
    } catch (err) {
      throw err
    }
    commit('setChangelog', changelog.data)
    commit('setEndpoints', endpoints.data)
  }
}
