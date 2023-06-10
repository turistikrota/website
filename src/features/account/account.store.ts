import { createSlice } from "@reduxjs/toolkit";
import { AccountListItem } from "./account.types";

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
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
