import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/categoriesSlice";
import { userSlice } from "./user/userSlice";
import { cartSlice } from "./cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//root-reducer

// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//     categories: categoriesSlice.reducer,
//     cart: cartSlice.reducer,
//   },
// });
