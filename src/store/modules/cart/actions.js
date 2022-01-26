//import axios from "axios";
//import Cart from "../../../apis/Cart";

export const addProductToCart = ({ commit, dispatch }, { book, quantity }) => {
  commit("ADD_TO_CART", { book, quantity });

  dispatch(
    "notification/addNotification",
    {
      type: "success",
      message: "Book added to cart.",
    },
    { root: true }
  );

  // Cart.store({
  //   book_isbn: book.isbn,
  //   quantity,
  // });

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

export const removeProductFromCart = ({ commit, dispatch }, book) => {
  commit("REMOVE_PRODUCT_FROM_CART", book);

  dispatch(
    "notification/removeNotification",
    {
      type: "danger",
      message: "Book removed to cart.",
    },
    { root: true }
  );

  //Cart.delete(product.isbn);

  // axios.delete(`https://henri-potier.techx.fr/cart/${product.isbn}`);
};

export const clearCartItems = ({ commit, dispatch }) => {
  commit("CLEAR_CART_ITEMS");

  dispatch(
    "notification/removeNotification",
    {
      type: "warning",
      message: "All books removed to cart.",
    },
    { root: true }
  );

  //Cart.deleteAll();
  // axios.delete("https://henri-potier.techx.fr/cart");
};
