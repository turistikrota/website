import { createSlice } from "@reduxjs/toolkit";
import { safeStorageParse } from "~/utils/storage";
import { authApi } from "../auth/auth.api";
import { AccountListItem } from "./account.types";

enum AccountStorage {
  CurrentAccount = "currentAccount",
}

interface AccountState {
  currentAccount: AccountListItem | null;
}

const initialState: AccountState = {
  currentAccount: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.currentAccount = action.payload;
      localStorage.setItem(
        AccountStorage.CurrentAccount,
        JSON.stringify(action.payload)
      );
    },
    removeAccount: (state) => {
      state.currentAccount = null;
      localStorage.removeItem(AccountStorage.CurrentAccount);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.currentAccount = null;
        localStorage.removeItem(AccountStorage.CurrentAccount);
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.currentAccount = null;
        localStorage.removeItem(AccountStorage.CurrentAccount);
      }
    );
  },
});

export const { setAccount, removeAccount } = accountSlice.actions;
export default accountSlice.reducer;

export const onStartClient = (dispatch: any) => {
  safeStorageParse(AccountStorage.CurrentAccount, (account) => {
    dispatch(setAccount(account));
  });
};
