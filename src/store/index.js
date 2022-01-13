import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import book from "./modules/book";
import cart from "./modules/cart";

export default new Vuex.Store({
  modules: {
    book,
    cart,
  },
});
