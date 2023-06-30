import { configureStore } from "@reduxjs/toolkit";
import { accountApi } from "~/features/account/account.api";
import accountReducer from "~/features/account/account.store";
import { authApi } from "~/features/auth/auth.api";
import authReducer from "~/features/auth/auth.store";
import configReducer from "~/features/config/config.store";
import { placeApi } from "~/features/place/place.api";
import placeReducer from "~/features/place/place.store";
import { uploadApi } from "~/features/upload/upload.api";

const store = configureStore({
  reducer: {
    config: configReducer,
    auth: authReducer,
    account: accountReducer,
    place: placeReducer,
    [authApi.reducerPath]: authApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [uploadApi.reducerPath]: uploadApi.reducer,
    [placeApi.reducerPath]: placeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      accountApi.middleware,
      uploadApi.middleware,
      placeApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
