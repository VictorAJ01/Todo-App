import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../../modules/Authentication/Slices/login_slice";
import userSignUpReducer from "../../modules/Authentication/Slices/sign_up_slice";

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
    signUp: userSignUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
