import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import levelReducer from "./lowerLevel";

export default configureStore({
  reducer: {
    profile: profileReducer,
    levels: levelReducer,
  },
});
