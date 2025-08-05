import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Default_items } from "../data/items";
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingended: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});
export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
