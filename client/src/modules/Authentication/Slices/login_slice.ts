import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpStatus } from "../../../commons";
import axios from "axios";
import { FormInputs, AuthState } from "../auth.interface";

const NAMESPACE = "USER_LOGIN";

const initialState: AuthState = {
  status: HttpStatus.IDLE,
  message: undefined,
  response: undefined,
};

export const userLogin = createAsyncThunk(
  `${NAMESPACE}/login`,
  async (payload: FormInputs) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      payload
    );
    return response;
  }
);

export const LoginSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.status = HttpStatus.LOADING;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.status = HttpStatus.DONE;
    });
    builder.addCase(userLogin.rejected, (state, { error }) => {
      state.status = HttpStatus.ERROR;
      state.message = error?.message ?? String(error);
    });
  },
});

export const { resetAuthState } = LoginSlice.actions;

export default LoginSlice.reducer;
