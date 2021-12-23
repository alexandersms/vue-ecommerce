import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://henri-potier.techx.fr/books").then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productIsbn) => {
  axios
    .get(`https://henri-potier.techx.fr/books/${productIsbn}`)
    .then((response) => {
      commit("SET_PRODUCT", response.data);
    });
};

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });
};
