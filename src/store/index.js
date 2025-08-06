import { configureStore } from "@reduxjs/toolkit";
import fetchStatus from "./fetchStatus";
import itemSlice from "./itemSlice";
import BagSlice from "./BagSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatus.reducer,
    bag: BagSlice.reducer,
  },
});
export default store;
