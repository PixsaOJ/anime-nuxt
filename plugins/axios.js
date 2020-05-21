// GLOBAL HEADERS
export default function ({$axios}) {
  $axios.setHeader('AUTHORISATION', 'Username Pass')
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url) // config.url comes from nuxt.config.js from axios config
  })
}
