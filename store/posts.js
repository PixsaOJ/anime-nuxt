// Loading state values to store from axios before render

export const state = () => ({
  all: [],
})

export const actions = {
  async fetchAllPosts({ state, commit }) {
    if (state.all?.length > 2) return
    const posts = await this.$axios.$get('/top/anime')
    commit('setPosts', posts.data)
  },

  async fetchPost({ state, commit }, id) {
    if (!state.all.find((post) => post.mal_id === id)) {
      await this.dispatch('posts/fetchAllPosts') // change this to fetch related posts in future
      // const post = await this.$axios.$get(`posts/${id}`) // commenting for now for performance
      // commit('setPost', post)
    }
  },
}

export const mutations = {
  setPost(state, post) {
    state.all.push(post)
  },
  setPosts(state, posts) {
    state.all = posts
  },
}