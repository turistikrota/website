import { createSlice } from "@reduxjs/toolkit";
import { safeStorageParse } from "~/utils/storage";
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
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;

export const onStartClient = (dispatch: any) => {
  safeStorageParse(AccountStorage.CurrentAccount, (account) => {
    dispatch(setAccount(account));
  });
};
