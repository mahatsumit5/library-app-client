import { configureStore } from "@reduxjs/toolkit";
// these will store data in webstorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./pages/sgnup-signin/userSlice.js";
const userPresistConfig = {
  key: "userInfo",
  storage,
};

const presistedUserReducer = persistReducer(userPresistConfig, userReducer);
const store = configureStore({
  reducer: {
    userInfo: presistedUserReducer,
    testUser: userReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
