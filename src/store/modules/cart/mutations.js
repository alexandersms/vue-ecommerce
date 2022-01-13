export const ADD_TO_CART = (state, { book, quantity }) => {
  let bookInCart = state.cart.find((item) => item.book.isbn === book.isbn);

  if (bookInCart) {
    bookInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    book,
    quantity,
  });
};

export const SET_CART = (state, cartItems) => (state.cart = cartItems);

export const REMOVE_PRODUCT_FROM_CART = (state, book) => {
  state.cart = state.cart.filter((item) => item.book.isbn !== book.isbn);
};

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
};
