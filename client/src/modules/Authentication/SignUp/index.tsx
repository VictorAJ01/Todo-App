import { Box, Text, useToast } from "@chakra-ui/react";
import { AuthForm } from "../../../components/AuthForm";
import { SubmitHandler } from "react-hook-form";
import { FormInputs } from "../auth.interface";
import { resetAuthState, userSignUp } from "../Slices/sign_up_slice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import React from "react";
import { HttpStatus } from "../../../commons";
import { RootState } from "../../../redux/app/store";

export const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    dispatch(userSignUp(data));
  };

  const userSignUpState = useAppSelector((state: RootState) => state.signUp);

  React.useEffect(() => {
    const { status, message } = userSignUpState;
    if (status === HttpStatus.DONE) {
      toast({ description: "User created successfully", status: "success" });
    }
    if (status === HttpStatus.ERROR) {
      toast({ description: message, status: "error" });
    }
    dispatch(resetAuthState());
  }, [userSignUpState, toast, dispatch]);
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
