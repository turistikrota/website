import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "~/features/auth/auth.api";
import authReducer from "~/features/auth/auth.store";
import configReducer from "~/features/config/config.store";

const store = configureStore({
  reducer: {
    config: configReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
