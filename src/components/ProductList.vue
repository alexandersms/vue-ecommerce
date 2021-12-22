<template>
  <div class="row">
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
