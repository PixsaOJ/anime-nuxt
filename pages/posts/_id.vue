<template>
  <div>
    <div class="container mt-5">
      <article>
        <h1 class="title">{{ post.title }}</h1>
        <div class="card mx-auto my-5" style="width: 18rem;">
          <img
            class="card-img-top post__image"
            :src="post.image_url"
            :alt="post.title"
          />
          <div class="card-body">
            <a :href="post.url" class="btn btn-primary">Visit Page</a>
          </div>
        </div>
      </article>

      <hr />

      <aside>
        <h3>Animes you might also enjoy</h3>
        <relatedAnime :related-posts="relatedPosts" />
      </aside>
    </div>
  </div>
</template>

<script>
import RelatedAnime from '~/components/RelatedAnime.vue'

export default {
  components: {
    RelatedAnime,
  },

  async fetch({ store, params }) {
    await store.dispatch('posts/fetchPost', params.id)
  },

  data() {
    return {
      id: this.$route.params.id,
    }
  },

  computed: {
    post() {
      return this.$store.state.posts.all.find(
        (p) => p.mal_id === Number(this.id)
      )
    },

    relatedPosts() {
      return this.$store.state.posts.all.filter(
        (post) => post.mal_id !== Number(this.id)
      )
    },
  },

  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      title: this.post.title,
      meta: [
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.post },
        { name: 'description', content: this.post.post },
        {
          name: 'twitter:image',
          content: this.post.image_url,
        },
        { name: 'twitter:card', content: 'sumarry_large_image' },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
    }
  },
}
</script>

<style lang="scss" scoped>
.post__image {
  max-height: 350px;
}
</style>
