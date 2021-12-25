export const SET_PRODUCTS = (state, products) => (state.products = products);

export const SET_PRODUCT = (state, product) => (state.product = product);

export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find(
    (item) => item.product.isbn === product.isbn
  );

  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity,
  });
};

export const SET_CART = (state, cartItems) => (state.cart = cartItems);
