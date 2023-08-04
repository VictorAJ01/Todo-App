import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpStatus, setCredentials } from "../../../commons";
import { Api } from "../../../utils";
import { FormInputs, AuthState, LoginResponsePayload } from "../auth.interface";

const NAMESPACE = "USER_LOGIN";

const initialState: AuthState = {
  status: HttpStatus.IDLE,
  message: undefined,
  response: undefined,
};

export const userLogin = createAsyncThunk(
  `${NAMESPACE}/login`,
  async (payload: FormInputs) => {
    const response = await Api.post<LoginResponsePayload, LoginResponsePayload>(
      "/auth/login",
      payload
    );
    return response;
  }
);

export const LoginSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.status = HttpStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.status = HttpStatus.LOADING;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      setCredentials(payload.token);
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
