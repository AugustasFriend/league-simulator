import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { teamsReducer } from "./slices/teamsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ teams: teamsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: rootReducer });

export const persistor = persistStore(store);
