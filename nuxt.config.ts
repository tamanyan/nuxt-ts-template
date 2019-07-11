import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        content: process.env.npm_package_name || ''
      },
      {
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:site_name',
        content: process.env.npm_package_name || ''
      },
      {
        property: 'og:image',
        content: '/icon.png'
      },
      // twitter
      {
        property: 'twitter:title',
        content: process.env.npm_package_name || ''
      },
      {
        property: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      // PWA
      { name: 'theme-color', content: '#EE1C23' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3478F6' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default config
