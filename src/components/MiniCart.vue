<template>
  <div class="dropdown-menu p-2 minicartSize" aria-labelledby="triggerId">
    <div v-for="item in cart" :key="item.product.isbn">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />{{ item.quantity }}x{{ item.product.price }}€
        </div>
        <div>
          <a href="#" class="badge badge-secondary">remove</a>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: 25€</span>
      <a href="#">Clear Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
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
