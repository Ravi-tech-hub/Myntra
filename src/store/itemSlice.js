import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Default_items } from "../data/items";
const itemSlice = createSlice({
  name: "items",
  initialState: Default_items,
  reducers: {
    addIntialItem: (store, action) => {
      return store;
    },
  },
});
export const itemsAction = itemSlice.actions;
export default itemSlice;
