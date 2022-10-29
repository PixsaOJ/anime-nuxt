<template>
  <nav class="navbar navbar-dark bg-dark">
    <nuxt-link class="navbar-brand" :to="localePath('index')">Home</nuxt-link>

    <nuxt-link :to="switchLocalePath('en')" class="locales p-2"
      >🇬🇧 English</nuxt-link
    >
    <nuxt-link :to="switchLocalePath('fr')" class="locales p-2"
      >🇫🇷 Français</nuxt-link
    >

    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.locales {
  font-size: 1.2rem;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
}
</style>