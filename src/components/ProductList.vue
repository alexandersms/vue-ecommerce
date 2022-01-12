<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card
      v-for="product in products"
      :key="product.isbn"
      :product="product"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  name: "ProductList",

  computed: {
    ...mapState(["products"]),
  },

  mounted() {
    this.getProducts();
  },

  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>

<style scoped></style>
