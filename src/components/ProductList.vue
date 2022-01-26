<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card v-for="book in books" :key="book.isbn" :book="book" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  name: "ProductList",

  computed: {
    ...mapState("book", ["books"]),
    // ...mapState({
    //   books: (state) => state.book.books,
    // }),
  },

  mounted() {
    this.getBooks();
  },

  methods: {
    ...mapActions("book", ["getBooks"]),
    // ...mapActions(["getBooks"]),
  },
};
</script>

<style scoped></style>
