<template>
  <div class="row mt-4">
    <div class="col-4">
      <img
        src="https://via.placeholder.com/150x100"
        class="w-100"
        alt="image product"
      />
    </div>
    <div class="col-8">
      <h1>Product Title</h1>
      <h3>33$</h3>

      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-secondary" @click="addToCart()">
        Add to card
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        consequuntur architecto ipsum hic corrupti perferendis quaerat quas
        nulla. Excepturi, soluta!
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Product",
  props: ["isbn"],

  computed: {
    ...mapState(["product"]),
  },

  mounted() {
    this.getProduct(this.isbn);
  },

  methods: {
    ...mapActions(["getProduct", "addProductToCart"]),
    addToCart() {
      this.addProductToCart({
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped></style>
