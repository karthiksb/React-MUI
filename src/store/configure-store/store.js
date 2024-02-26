// store.js

import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../../drawerSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    // other reducers...
  },
});

export default store;
