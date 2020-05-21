<template>
  <div>
    <div class="container mt-5">
      <article>
        <h1 class="title">{{ post.title }}</h1>
        <p>
          {{ post.body }}
        </p>
      </article>

      <aside>
        <h3>Posts you might enjoy</h3>

        <ul>
          <li v-for="(related, index) in relatedPosts" :key="index">
            <!-- <a :href="`/posts/${related.id}`">{{ related.title }}</a> -->
            <nuxt-link :to="{ name: 'posts-id', params: { id: related.id } }">
              {{ related.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    return { post: response.data }
  },

  data() {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    relatedPosts() {
      return this.$store.state.posts.all.filter((post) => post.id !== this.id)
    }
  },

  head() {
    return {
      title: this.post.title,
      meta: [
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.content },
        {
          name: 'twitter:image',
          content:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fchinese-food-dim-sum-on-green-background-picture-id667690616&f=1&nofb=1'
        },
        { name: 'twitter:card', content: 'sumarry_large_image' }
      ]
    }
  }
}
</script>

<style scoped></style>
