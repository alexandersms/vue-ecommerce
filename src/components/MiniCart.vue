<template>
  <div class="dropdown-menu p-2 minicartSize" aria-labelledby="triggerId">
    <div v-for="item in cart" :key="item.book.isbn">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.book.title }}</strong>
          <br />{{ item.quantity }}x{{ item.book.price }}€
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.book)"
            >remove</a
          >
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: {{ cartTotalPrice }}€</span>
      <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["cart"]),
    // ...mapState({
    //   cart: (state) => state.cart.cart,
    // }),
    ...mapGetters("cart", ["cartTotalPrice"]),
    // ...mapGetters({
    //   cartTotalPrice: "cart/cartTotalPrice",
    // }),
  },

  // mounted() {
  //   this.$store.dispatch("getCartItems");
  // after mapActions "Add getCartItems in mapActions"
  // this.getCartItems()
  // },

  methods: {
    ...mapActions("cart", ["removeProductFromCart", "clearCartItems"]),
    // ...mapActions(["removeProductFromCart", "clearCartItems"]),
  },
};
</script>

<style scoped>
.minicartSize {
  min-width: 320px !important;
  right: 0;
  left: auto;
}
</style>
