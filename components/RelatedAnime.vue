<template>
  <ul class="links">
    <li v-for="(related, index) in relatedPosts" :key="index">
      <nuxt-link
        :to="localePath({ name: 'posts-id', params: { id: related.mal_id } })"
      >
        {{ related.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    relatedPosts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.links {
  font-size: 1.1rem;
}
</style>