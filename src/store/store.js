import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./user/userSlice";

//root-reducer

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
