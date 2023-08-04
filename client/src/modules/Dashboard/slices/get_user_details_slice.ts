import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpStatus } from "../../../commons";
import { Api } from "../../../utils";
import { GetUserDetailsResponse, GetUserDetailsState } from "../dashboard_type";

const NAMESPACE = "USER_DETAILS";

const initialState: GetUserDetailsState = {
  status: HttpStatus.IDLE,
  message: undefined,
  response: undefined,
};

export const getUserDetails = createAsyncThunk(
  `${NAMESPACE}/user`,
  async () => {
    const response = await Api.get<
      GetUserDetailsResponse,
      GetUserDetailsResponse
    >("/get-user-details");
    return response;
  }
);

export const getUserDetailsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.status = HttpStatus.LOADING;
    });
    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      state.status = HttpStatus.DONE;
      state.response = payload;
    });
    builder.addCase(getUserDetails.rejected, (state, { error }) => {
      state.status = HttpStatus.ERROR;
      state.message = error?.message ?? String(error);
    });
  },
});

export default getUserDetailsSlice.reducer;
