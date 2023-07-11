import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpStatus } from "../../../commons";
import axios from "axios";
import { FormInputs, AuthState } from "../auth.interface";

const NAMESPACE = "USER_SIGNUP";

const initialState: AuthState = {
  status: HttpStatus.IDLE,
  message: undefined,
  response: undefined,
};

export const userSignUp = createAsyncThunk(
  `${NAMESPACE}/login`,
  async (payload: FormInputs) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/sign_up",
      payload
    );
    return response;
  }
);

export const SignUpSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.pending, (state) => {
      state.status = HttpStatus.LOADING;
    });
    builder.addCase(userSignUp.fulfilled, (state) => {
      state.status = HttpStatus.DONE;
    });
    builder.addCase(userSignUp.rejected, (state, { error }) => {
      state.status = HttpStatus.ERROR;
      state.message = error?.message ?? String(error);
    });
  },
});

export const { resetAuthState } = SignUpSlice.actions;

export default SignUpSlice.reducer;
