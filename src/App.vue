<template>
  <div id="app">
    <div id="nav">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
