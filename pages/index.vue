<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-fundamentals
      </h1>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'posts-id', params: { id: post.id } }"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  async asyncData({ $axios }) {
    const posts = await $axios.$get('posts')
    return { posts }
  },

  head() {
    return {
      title: 'Home page 🏡',
      meta: [
        { name: 'twitter:title', content: 'Welcome to nuxt babe' },
        { name: 'twitter:description', content: 'Very gut web nuxtbabe' },
        {
          name: 'twitter:image',
          content:
            'hhttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Ftraditional-chinese-dim-sum-malar-cake-with-tea-picture-id186362617&f=1&nofb=1'
        },
        { name: 'twitter:card', content: 'sumarry_large_image' }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  /* font-size: 100px; */
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
