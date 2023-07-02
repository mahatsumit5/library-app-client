import { configureStore } from "@reduxjs/toolkit"; //this is for storing data in redux/toolkit
// these will store data in webstorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //default localstorage for web

import userReducer from "./pages/signup-signin/userSlice.js";
import bookReducer from "./pages/Books/bookSlice.js";

const userPresistConfig = {
  //this is a configurations
  key: "userInfo",
  storage,
};

const presistedUserReducer = persistReducer(userPresistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: presistedUserReducer,
    testUser: userReducer,
    bookInfo: bookReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
