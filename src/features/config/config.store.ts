import { createSlice } from '@reduxjs/toolkit'

interface ConfigState {
  locale: string
}

const initialState: ConfigState = {
  locale: 'en',
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload
    },
  },
})

export const { setLocale } = configSlice.actions

export default configSlice.reducer
