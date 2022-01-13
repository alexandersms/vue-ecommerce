<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="nav navbar-nav" id="nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link">Product</router-link>
      </div>

      <div>
        <div class="dropdown open">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ cartItemCount }} {{ cartItemCount > 1 ? "Carts" : "Cart" }}
          </button>
          <div @click="$event.stopPropagation()">
            <mini-cart></mini-cart>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

import MiniCart from "@/components/MiniCart.vue";
export default {
  name: "Header",
  components: {
    MiniCart,
  },
  computed: {
    ...mapGetters("cart", ["cartItemCount"]),
    // ...mapGetters({
    //   cartItemCount: "cart/cartItemCount",
    // }),
  },
};
</script>

<style scoped>
#nav a {
  font-weight: bold;
  color: #fafafa;
}

#nav a.router-link-exact-active {
  color: #2980b9;
}
</style>
