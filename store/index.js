const githubApiUrl =
  'https://api.github.com/repos/sarahdayan/dinero.js/releases'

export const state = () => ({
  locale: 'en',
  changelog: []
})

export const getters = {
  latestVersion: state => state.changelog[0].tag_name,
  sidebarRoutesFromEndpoints: state =>
    Object.entries(state.endpoints)
      .filter(endpoint => endpoint[0] !== 'docs_en_about')
      .map(endpoint =>
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
    const endpoints = await this.$axios.$get('/')
    const changelog = await this.$axios.$get(githubApiUrl).catch(e => {
      console.error('Error while fetching changelog: ', e) // eslint-disable-line no-console
      return [{ tag_name: '0.0.0' }]
    })

    commit('setChangelog', changelog)
    commit('setEndpoints', endpoints)
  }
}
