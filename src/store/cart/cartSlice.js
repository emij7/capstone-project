import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  //   setIsCartOpen: () => {},
  cartItems: [],
  //   addItemToCart: () => {},
  //   removeItemToCart: () => {},
  //   clearItemFromCart: () => {},
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setIsCartOpen } = cartSlice.actions;

export const getCartStatus = (state) => state.cart.isCartOpen;

export default cartSlice.reducer;
