// Loading state values to store from axios before render

export const state = () => ({
  all: []
})

export const actions = {
  async fetchAllPosts({ state, commit }) {
    const posts = await this.$axios.$get('posts')
    commit('setPosts', posts)
  },

  async fetchPost({ state, commit }, id) {
    if (!state.all.find((post) => post.id === id)) {
      const post = await this.$axios.$get(`posts/${id}`)
      commit('setPost', post)
    }
  }
}

export const mutations = {
  setPost(state, post) {
    state.all.push(post)
  },
  setPosts(state, posts) {
    state.all = posts
  }
}
