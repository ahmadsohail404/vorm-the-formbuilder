<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default { components: { HomeView } };
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
