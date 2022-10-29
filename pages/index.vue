<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Pux-fundamentals <br />
        {{ $t('welcome') }}
      </h1>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :key="post.mal_id"
          class="m-3 p-2"
          :to="localePath({ name: 'posts-id', params: { id: post.mal_id } })"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/SiteLogo.vue'
export default {
  name: 'Home',
  components: {
    Logo,
  },
  async fetch({ store }) {
    // dispatch action fetchAllPosts
    await store.dispatch('posts/fetchAllPosts')
  },
  head() {
    const i18nSeo = this.$nuxtI18nHead()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: 'Home page 🏡',
      meta: [
        { name: 'twitter:title', content: 'Welcome to nuxt babe' },
        { name: 'twitter:description', content: 'Very gut web nuxtbabe' },
        {
          name: 'description',
          content: 'This is really cool 100% seo-friendly webpage',
        },
        {
          name: 'twitter:image',
          content:
            'hhttps://external-co>ntent.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Ftraditional-chinese-dim-sum-malar-cake-with-tea-picture-id186362617&f=1&nofb=1',
        },
        { name: 'twitter:card', content: 'sumarry_large_image' },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.all
    },
  },
  
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
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.links a {
  font-size: 1.2rem;
  border: 1px solid white;
  border-radius: 3px;
}
</style>