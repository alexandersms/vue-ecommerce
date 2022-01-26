<template>
  <div class="col-3 mt-3 mb-2">
    <div class="card h-100 text-left">
      <img class="card-img-top w-100" :src="book.cover" :alt="book.title" />
      <div class="card-body">
        <h6 class="card-title">
          <router-link :to="{ name: 'book', params: { id: book.isbn } }">
            {{ book.title }}
          </router-link>
        </h6>
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
