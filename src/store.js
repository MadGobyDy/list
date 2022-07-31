import {configureStore} from "@reduxjs/toolkit";
import listReducer from "./redux.js";

const store = configureStore({
  reducer: {
    list: listReducer,
  },
})

export { store };