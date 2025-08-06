import { configureStore, createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addIntialItem: (store, action) => {
      // console.log("reducer", store, action);
      return action.payload;
    },
  },
});
export const itemsAction = itemSlice.actions;
export default itemSlice;
