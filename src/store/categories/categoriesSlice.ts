import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesMap: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesMap: (state, action) => {
      state.categoriesMap = action.payload;
    },
  },
});

export const { setCategoriesMap } = categoriesSlice.actions;

export const getCategories = (state: RootState) =>
  state.categories.categoriesMap;

export default categoriesSlice.reducer;
