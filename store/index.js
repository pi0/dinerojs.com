export const state = () => ({
  apiUrl: 'http://localhost:4000/docs/',
  locale: 'en'
})

export const mutations = {
  setApiUrl(state, apiUrl) {
    state.apiUrl = apiUrl
  },
  setLocale(state, locale) {
    state.locale = locale
  }
}
