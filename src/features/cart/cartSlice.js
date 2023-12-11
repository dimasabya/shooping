import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, actions) => {
      const newItem = actions.payload;
      const isProductExist = state.cartItems.findIndex((products) => products.id === newItem.id);

      if (isProductExist !== -1) {
        state.cartItems[isProductExist].quantity += 1;
        state.cartItems[isProductExist].totalPrice = state.cartItems[isProductExist].quantity * state.cartItems[isProductExist].price;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemFromCart: () => {},
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice;

// selector
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalItems = (state) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
