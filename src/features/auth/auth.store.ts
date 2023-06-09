import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
export const { setTokens, setIsAuthenticated, setTurnstileToken } =
  authSlice.actions;
