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

  axios.post("https://henri-potier.techx.fr/cart", {
    product_isbn: product.isbn,
    quantity,
  });
};

// export const getCartItems = ({ commit }) => {
//   axios.get("https://henri-potier.techx.fr/cart").then((response) => {
//     commit("SET_CART", response.data);
//   });
// };

export const removeProductFromCart = ({ commit }, product) => {
  commit("REMOVE_PRODUCT_FROM_CART", product);

  // axios.delete(`https://henri-potier.techx.fr/cart/${product.isbn}`);
};

export const clearCartItems = ({ commit }) => {
  commit("CLEAR_CART_ITEMS");

  // axios.delete("https://henri-potier.techx.fr/cart");
};
