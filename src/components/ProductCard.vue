<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img class="card-img-top w-100" :src="book.cover" alt="" />
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="{ name: 'book', params: { id: book.isbn } }">{{
            book.title
          }}</router-link>
        </h4>
        <strong>{{ book.price }}€</strong>
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
import { mapActions } from "vuex";
export default {
  name: "ProductCard",
  props: ["book"],
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    addToCart() {
      this.addProductToCart({
        book: this.book,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped></style>
