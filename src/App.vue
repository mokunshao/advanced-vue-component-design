<template>
  <div id="app">
    <div id="app-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ep1">1</router-link> |
      <router-link to="/ep2">2</router-link> |
      <router-link to="/ep3">3</router-link> |
      <router-link to="/ep4">4</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app-nav {
  padding: 1em 1em 2em;
}
</style>
