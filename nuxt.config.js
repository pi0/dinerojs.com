import path from 'path'
import axios from 'axios'

const API_URL = 'http://localhost:4000/docs/'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Dinero.js | Documentation'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios', 'nuxt-svg-loader', '@nuxtjs/pwa'],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: API_URL
  },

  router: {
    middleware: ['home-redirect']
  },
  
  generate: {
    async routes() {
      const endpoints = await axios.get(API_URL).then(res => res.data)

      return Object.values(endpoints).map(path =>
        path.replace(
          /(https?:\/\/[a-z0-9.]{1,}:[0-9]{1,}\/docs\/[a-z]{1,})/,
          ''
        )
      )
    }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.join(__dirname, 'tailwind.js')
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
