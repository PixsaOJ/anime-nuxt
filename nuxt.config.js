export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'anime-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/bootstrap.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.jikan.moe/v4',
    proxy: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
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
    vueI18nLoader: true,
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
