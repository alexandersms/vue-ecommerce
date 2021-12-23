<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img class="card-img-top w-100" :src="product.cover" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link
            :to="{ name: 'product', params: { id: product.isbn } }"
            >{{ product.title }}</router-link
          >
        </h4>
        <strong>{{ product.price }}€</strong>
        <p class="card-text">Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToCart()">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped></style>
