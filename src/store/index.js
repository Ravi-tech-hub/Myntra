import { configureStore } from "@reduxjs/toolkit";
import fetchStatus from "./fetchStatus";
import itemSlice from "./itemSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fetchStatus.reducer,
  },
});
export default store;
