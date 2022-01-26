<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      <span class="sr-only">Close</span>
    </button>
    <strong>{{ notification.message }}</strong>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "notification-message",
  props: ["notification"],

  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 1200);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapActions("notification", ["removeNotification"]),
  },
};
</script>

<style scoped></style>
