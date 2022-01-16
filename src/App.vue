<template>
  <div id="app">
    <div id="nav">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view />
    </div>
    <notifications-list></notifications-list>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import NotificationsList from "@/components/NotificationsList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    NotificationsList,
  },
};
</script>
