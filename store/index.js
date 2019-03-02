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
    const [endpoints, changelog] = await Promise.all([
      this.$axios.$get('/'),
      this.$axios.$get('/releases').then(r => r.releases)
    ])

    commit('setChangelog', changelog)
    commit('setEndpoints', endpoints)
  }
}
