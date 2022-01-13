//import axios from "axios";
import Cart from "../../../apis/Cart";

export const addProductToCart = ({ commit }, { book, quantity }) => {
  commit("ADD_TO_CART", { book, quantity });

  Cart.store({
    book_isbn: book.isbn,
    quantity,
  });

  // axios.post("https://henri-potier.techx.fr/cart", {
  //   product_isbn: product.isbn,
  //   quantity,
  // });
};

// export const getCartItems = ({ commit }) => {
//   Cart.all().then((response) => {
//     commit("SET_CART", response.data);
//   });
//   // axios.get("https://henri-potier.techx.fr/cart").then((response) => {
//   //   commit("SET_CART", response.data);
//   // });
// };

export const removeProductFromCart = ({ commit }, book) => {
  commit("REMOVE_PRODUCT_FROM_CART", book);

  //Cart.delete(product.isbn);

  // axios.delete(`https://henri-potier.techx.fr/cart/${product.isbn}`);
};

export const clearCartItems = ({ commit }) => {
  commit("CLEAR_CART_ITEMS");

  //Cart.deleteAll();
  // axios.delete("https://henri-potier.techx.fr/cart");
};
