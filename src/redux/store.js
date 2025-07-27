import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js"
import themeSlice from "./slices/themeSlice.js"


export const Store = configureStore({
  reducer: {
    user: userSlice,
    theme:themeSlice
  }
})
