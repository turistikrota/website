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
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
