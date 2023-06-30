import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  isCartOpen: boolean;
  cartItems: Item[];
  cartTotalQuantity: number;
  cartTotalPrice: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  //   removeItemToCart: () => {},
  //   clearItemFromCart: () => {},
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addCartItem: (state, action: PayloadAction<Item>) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((cartItem) => {
        return cartItem.id === product.id;
      });
      if (existingItem) {
        existingItem.quantity++;
      } else {
        const newCartItem = { ...product, quantity: 1 };
        state.cartItems.push(newCartItem);
      }
      state.cartTotalQuantity = state.cartTotalQuantity + 1;
      state.cartTotalPrice = state.cartTotalPrice + product.price;
    },
    removeCartItem: (state, action: PayloadAction<Item>) => {
      const productToRemove = action.payload;
      const existingItem = state.cartItems.find((cartItem) => {
        return cartItem.id === productToRemove.id;
      });
      if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== productToRemove.id
        );
      } else if (existingItem) {
        existingItem.quantity--;
      }
      state.cartTotalQuantity--;
      state.cartTotalPrice -= productToRemove.price;
    },
    clearCartItem: (state, action: PayloadAction<Item>) => {
      const productToRemove = action.payload;

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== productToRemove.id
      );

      state.cartTotalQuantity -= productToRemove.quantity;
      state.cartTotalPrice -= productToRemove.quantity * productToRemove.price;
    },
  },
});

export const { setIsCartOpen, addCartItem, removeCartItem, clearCartItem } =
  cartSlice.actions;

export const getCartStatus = (state: RootState) => state.cart.isCartOpen;
export const getCartItems = (state: RootState) => state.cart.cartItems;
export const getCartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const getCartTotalPrice = (state: RootState) =>
  state.cart.cartTotalPrice;

export default cartSlice.reducer;
