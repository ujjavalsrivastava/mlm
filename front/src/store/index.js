import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import levelReducer from "./lowerLevel";
import userReducer from "./users";

export default configureStore({
  reducer: {
    profile: profileReducer,
    levels: levelReducer,
    users: userReducer,
  },
});
