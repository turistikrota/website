import { configureStore } from "@reduxjs/toolkit";
import { accountApi } from "~/features/account/account.api";
import accountReducer from "~/features/account/account.store";
import { authApi } from "~/features/auth/auth.api";
import authReducer from "~/features/auth/auth.store";
import configReducer from "~/features/config/config.store";

const store = configureStore({
  reducer: {
    config: configReducer,
    auth: authReducer,
    account: accountReducer,
    [authApi.reducerPath]: authApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      accountApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
