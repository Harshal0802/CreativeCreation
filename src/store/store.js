import { configureStore } from "@reduxjs/toolkit";
import creativeReducer from "./slice";

const store = configureStore({
  reducer: {
    creative: creativeReducer,
  },
});

export default store;
