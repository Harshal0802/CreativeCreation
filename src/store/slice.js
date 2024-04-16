import { createSlice } from "@reduxjs/toolkit";

const creativeSlice = createSlice({
  name: "creative",
  initialState: {
    toggleDrawer: false,
    creatives: [],
  },
  reducers: {
    openDrawer: (state) => {
      state.toggleDrawer = true;
    },
    closeDrawer: (state) => {
      state.toggleDrawer = false;
    },
    addCreatives: (state, action) => {
      state.creatives.push(action.payload);
    },
  },
});

// export const creativeSelector = createSelector(
//   (state) => state.creative,
//   (state) => state
// );

export const { openDrawer, closeDrawer, addCreatives, filterCreatives } =
  creativeSlice.actions;

export default creativeSlice.reducer;
