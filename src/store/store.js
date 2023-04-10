import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categoriesSlice";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
//root-reducer

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//     categories: categoriesSlice.reducer,
//     cart: cartSlice.reducer,
//   },
// });
