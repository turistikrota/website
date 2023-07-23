import { createSlice } from '@reduxjs/toolkit'
import { safeStorageParse } from '@turistikrota/ui/utils/storage'
import { AccountListItem } from './account.types'

export enum AccountStorage {
  CurrentAccount = 'currentAccount',
}

interface AccountState {
  loading: boolean
  currentAccount: AccountListItem | null
}

const initialState: AccountState = {
  loading: false,
  currentAccount: null,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.currentAccount = action.payload
      localStorage.setItem(AccountStorage.CurrentAccount, JSON.stringify(action.payload))
    },
    removeAccount: (state) => {
      state.currentAccount = null
      localStorage.removeItem(AccountStorage.CurrentAccount)
    },
    setIsLoading: (state, action) => {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const { setAccount, removeAccount, setIsLoading } = accountSlice.actions
export default accountSlice.reducer

export const onStartClient = (dispatch: any) => {
  safeStorageParse(AccountStorage.CurrentAccount, (account) => {
    dispatch(setAccount(account))
  })
}
