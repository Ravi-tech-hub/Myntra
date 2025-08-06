import { configureStore, createSlice } from "@reduxjs/toolkit";
const BagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      // console.log("reducer", store, action);
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      return store.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const BagAction = BagSlice.actions;
export default BagSlice;
