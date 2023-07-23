import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '~/features/account/account.store'
import configReducer from '~/features/config/config.store'

const store = configureStore({
  reducer: {
    config: configReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat([]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
