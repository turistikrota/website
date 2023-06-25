import { createSlice } from "@reduxjs/toolkit";
import { safeStorageParse } from "~/utils/storage";
import { authApi } from "../auth/auth.api";
import { uploadApi } from "../upload/upload.api";
import { isFileUploadedResponse } from "../upload/upload.types";
import { accountApi } from "./account.api";
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
    builder.addMatcher(
      uploadApi.endpoints.uploadAvatar.matchFulfilled,
      (state, action) => {
        if (!state.currentAccount || !isFileUploadedResponse(action.payload))
          return;
        state.currentAccount.avatarUrl = action.payload.url;
        localStorage.setItem(
          AccountStorage.CurrentAccount,
          JSON.stringify(state.currentAccount)
        );
      }
    );
    builder.addMatcher(
      accountApi.endpoints.disableMyAccount.matchFulfilled,
      (state, action) => {
        if (!state.currentAccount) return;
        state.currentAccount.isActive = false;
        localStorage.setItem(
          AccountStorage.CurrentAccount,
          JSON.stringify(state.currentAccount)
        );
      }
    );
    builder.addMatcher(
      accountApi.endpoints.enableMyAccount.matchFulfilled,
      (state, action) => {
        if (!state.currentAccount) return;
        state.currentAccount.isActive = true;
        localStorage.setItem(
          AccountStorage.CurrentAccount,
          JSON.stringify(state.currentAccount)
        );
      }
    );
    builder.addMatcher(
      accountApi.endpoints.deleteMyAccount.matchFulfilled,
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
