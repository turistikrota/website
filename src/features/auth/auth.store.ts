import { createSlice } from "@reduxjs/toolkit";
import { User, isUser } from "~/types/user";
import { authApi } from "./auth.api";
import {
  isExpiredError,
  isLoginResponse,
  isRegisterResponse,
} from "./auth.types";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isExpired: boolean;
  currentUser: User | null;
  tokens: {
    accessToken: string;
    refreshToken: string;
    turnstileToken: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  isExpired: false,
  isLoading: false,
  currentUser: null,
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
    setAccessToken: (state, action) => {
      state.tokens.accessToken = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setIsExpired: (state, action) => {
      state.isExpired = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.tokens.accessToken = "";
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
    builder.addMatcher(
      authApi.endpoints.refresh.matchFulfilled,
      (state, action) => {
        if (isLoginResponse(action.payload)) {
          state.tokens.accessToken = action.payload.token;
          state.isAuthenticated = true;
        }
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        if (isRegisterResponse(action.payload)) {
          state.tokens.accessToken = action.payload.token;
          state.isAuthenticated = true;
        }
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrent.matchFulfilled,
      (state, action) => {
        if (isUser(action.payload)) {
          state.isAuthenticated = true;
          state.currentUser = action.payload;
        }
      }
    );
    builder.addMatcher(
      authApi.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.tokens.accessToken = "";
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrent.matchRejected,
      (state, action) => {
        if (isExpiredError(action.payload)) {
          state.isExpired = action.payload.isExpire;
          state.isAuthenticated = false;
          state.currentUser = null;
          state.tokens.accessToken = "";
        }
      }
    );
  },
});

export default authSlice.reducer;
export const {
  setTokens,
  setIsAuthenticated,
  setTurnstileToken,
  setAccessToken,
  setIsLoading,
  setUser,
  logout,
} = authSlice.actions;
