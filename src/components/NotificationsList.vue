<template>
  <div class="notifications-list">
    <notification-message
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationMessage from "./NotificationMessage.vue";

export default {
  name: "Notifications-List",
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapState("notification", ["notifications"]),
  },
};
</script>

<style scoped>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
