import { User } from "./../../database/User";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import LoginReducer from "../fetures/login/loginSilce";
import deviceReducer from "../fetures/device/diviceSlice";
import serviceReducer from "../fetures/servicess/servicesSlice";
import serviceDetailReducer from "../fetures/servicess/serviesDetailSlice";
import giveNumberReducer from "../fetures/giveNumber/giveNumberSlice";
import managerRoleReducer from "../fetures/managerRoles/managerRoleSlice";
import userReducer from "../fetures/user/userSlice";
const reducers = combineReducers({
  LoginReducer,
  deviceReducer,
  serviceReducer,
  serviceDetailReducer,
  giveNumberReducer,
  managerRoleReducer,
  userReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
