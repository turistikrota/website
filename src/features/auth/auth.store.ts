import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";
import { isLoginResponse } from "./auth.types";

interface AuthState {
  isAuthenticated: boolean;
  tokens: {
    accessToken: string;
    refreshToken: string;
    turnstileToken: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  tokens: {
    accessToken: "",
    refreshToken: "",
    turnstileToken: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setTurnstileToken: (state, action) => {
      state.tokens.turnstileToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        if (isLoginResponse(action.payload)) {
          state.tokens.accessToken = action.payload.token;
          state.isAuthenticated = true;
        }
      }
    );
  },
});

export default authSlice.reducer;
export const { setTokens, setIsAuthenticated, setTurnstileToken } =
  authSlice.actions;
