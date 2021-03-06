export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        // name: 'description',
        // content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** PWA CONFIG
   */
  pwa: {
    manifest: {
      name: 'Top Anime list',
      short_name: "Pixsa's Anime List",
      display: 'fullscreen',
      orientation: 'portrait-primary',
      background_color: 'rgb(6,6,6)',
      theme_color: 'rgb(6,6,6)',
      lang: 'en',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://api.jikan.moe/v3/.*',
          strategyOptions: {
            cacheName: 'pixsa-cache',
            cacheExpiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 72,
            },
          },
        },
      ],
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/bootstrap.min.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],
  /*
   ** axios configuration
   */
  axios: {
    baseURL: 'https://api.jikan.moe/v3',
  },
  /*
   ** i18n configuration
   */
  i18n: {
    seo: true,
    baseUrl: 'http://localhost:3000',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US', // Will be used as catchall locale by default
      },
      {
        code: 'fr',
        iso: 'fr-FR',
      },
    ],
    defaultLocale: 'en',
    // lazy: true,
    // langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
