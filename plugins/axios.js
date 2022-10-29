// GLOBAL HEADERS
export default function ({ $axios }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url) // config.url comes from nuxt.config.js from axios config
  })

}