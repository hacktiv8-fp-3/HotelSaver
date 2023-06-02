import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import homeSlice from "./slice/homeSlice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const rootReducers = combineReducers({
  auth: authSlice,
  home: homeSlice,
});

const persisted = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persisted,
  middleware: [thunk],
});

export const persistor = persistStore(store);
