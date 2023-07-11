import { Box, Text, useToast } from "@chakra-ui/react";
import React from "react";

import { AuthForm } from "../../../components/AuthForm";
import { SubmitHandler } from "react-hook-form";
import { FormInputs } from "../auth.interface";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { userLogin, resetAuthState } from "../Slices/login_slice";
import { RootState } from "../../../redux/app/store";
import { HttpStatus } from "../../../commons";

export const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(userLogin(data));
  };

  const userLoginState = useAppSelector((state: RootState) => state.login);

  React.useEffect(() => {
    const { status } = userLoginState;
    if (status === HttpStatus.DONE) {
      toast({ description: "Logged in successfully", status: "success" });
    }
    if (status === HttpStatus.ERROR) {
      toast({ description: "Login failed, Try again!", status: "error" });
    }
    dispatch(resetAuthState());
  }, [userLoginState, toast, dispatch]);

  return (
    <Box
      w={{ base: "90%", md: "30rem", lg: "36.25rem" }}
      fontFamily="heading"
      textAlign="center"
    >
      <Text fontSize={{ base: "2rem", md: "2.8rem" }} fontWeight="700">
        Log in
      </Text>
      <Text color="#7C7070" fontSize={{ base: "1rem", md: "1.15rem" }}>
        Keep your life on track, one task at a time...
      </Text>
      <AuthForm buttonTitle="Login" onSubmit={onSubmit} />
      <Box textAlign="center" mt={{ base: ".5rem", md: "1rem" }}>
        <Text fontStyle="italic" fontWeight="300">
          Don't have an account?{" "}
          <a href="/">
            <Text
              fontStyle="initial"
              as="span"
              color="#9F74C0"
              fontWeight="500"
            >
              Sign up
            </Text>
          </a>
        </Text>
      </Box>
    </Box>
  );
};
