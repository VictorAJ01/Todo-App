import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../../modules/Authentication/Slices/login_slice";
import userSignUpReducer from "../../modules/Authentication/Slices/sign_up_slice";
import getUserDetailsReducer from "../../modules/Dashboard/slices/get_user_details_slice";

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
    signUp: userSignUpReducer,
    userDetails: getUserDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
