import { Box, Text, useToast } from "@chakra-ui/react";
import React from "react";

import { SubmitHandler } from "react-hook-form";

import { AuthForm } from "../../../components/AuthForm";
import { FormInputs } from "../auth.interface";

import { resetAuthState, userSignUp } from "../Slices/sign_up_slice";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { HttpStatus } from "../../../commons";
import { RootState } from "../../../redux/app/store";
import { useNavigate } from "react-router";

export const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleNavigate = React.useCallback(() => {
    navigate("/dashboard", { replace: true });
  }, [navigate]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    dispatch(userSignUp(data));
  };

  const userSignUpState = useAppSelector((state: RootState) => state.signUp);

  React.useEffect(() => {
    const { status, message } = userSignUpState;
    if (status === HttpStatus.DONE) {
      toast({ description: "User created successfully", status: "success" });
      handleNavigate();
    }
    if (status === HttpStatus.ERROR) {
      toast({ description: message, status: "error" });
    }
    dispatch(resetAuthState());
  }, [userSignUpState, toast, dispatch, handleNavigate]);

  return (
    <Box
      w={{ base: "90%", md: "30rem", lg: "36.25rem" }}
      fontFamily="heading"
      textAlign="center"
    >
      <Text fontSize={{ base: "2rem", md: "2.8rem" }} fontWeight="700">
        Sign up
      </Text>
      <Text color="#7C7070" fontSize={{ base: "1rem", md: "1.15rem" }}>
        From start to finish, a to-do list is what you need...
      </Text>
      <AuthForm buttonTitle="Sign up" onSubmit={onSubmit} />
      <Box textAlign="center" mt={{ base: ".5rem", md: "1rem" }}>
        <Text fontStyle="italic" fontWeight="300">
          Has an account already?{" "}
          <a href="/login">
            <Text
              fontStyle="initial"
              as="span"
              color="#9F74C0"
              fontWeight="500"
            >
              Login
            </Text>
          </a>
        </Text>
      </Box>
    </Box>
  );
};
