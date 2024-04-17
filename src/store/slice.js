import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const creativeSlice = createSlice({
  name: "creative",
  initialState: {
    toggleDrawer: false,
    creatives: [],
    colors: [],
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
  extraReducers: (builder) => {
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.colors = action.payload;
    });
    builder.addCase(getColors.rejected, (state, action) => {
      console.error("Error", action.payload);
    });
  },
});

export const getColors = createAsyncThunk("getColors", async () => {
  const res = await axios.get(
    "https://random-flat-colors.vercel.app/api/random?count=6"
  );
  return res?.data;
});

export const { openDrawer, closeDrawer, addCreatives, filterCreatives } =
  creativeSlice.actions;

export default creativeSlice.reducer;
