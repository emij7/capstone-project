import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./user/userSlice";

//root-reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
