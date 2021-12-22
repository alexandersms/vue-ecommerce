<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card />
    <product-card />
    <product-card />
    <product-card />
    <product-card />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  name: "ProductList",
};
</script>

<style scoped></style>
