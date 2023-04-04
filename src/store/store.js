import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categoriesSlice";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";

//root-reducer

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
  },
});
