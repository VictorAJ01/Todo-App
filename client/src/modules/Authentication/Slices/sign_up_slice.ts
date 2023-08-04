import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpStatus, setCredentials } from "../../../commons";
import { Api } from "../../../utils";
import { FormInputs, AuthState, LoginResponsePayload } from "../auth.interface";

const NAMESPACE = "USER_SIGNUP";

const initialState: AuthState = {
  status: HttpStatus.IDLE,
  message: undefined,
  response: undefined,
};

export const userSignUp = createAsyncThunk(
  `${NAMESPACE}/login`,
  async (payload: FormInputs) => {
    const response = await Api.post<LoginResponsePayload, LoginResponsePayload>(
      "/auth/sign_up",
      payload
    );
    return response;
  }
);

export const SignUpSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.status = HttpStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.pending, (state) => {
      state.status = HttpStatus.LOADING;
    });
    builder.addCase(userSignUp.fulfilled, (state, { payload }) => {
      setCredentials(payload.token);
      console.log(payload);
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
