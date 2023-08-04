import { Box } from "@chakra-ui/react";
import React from "react";

import { Hero } from "./components/hero";
import { TodoInput } from "./components/todo_input";
import { DisplayTodoCards } from "./components/display_todo_cards";

import { getUserDetails } from "./slices/get_user_details_slice";
import { useAppDispatch } from "../../hooks";

export const Dashboard = (): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <Box
      bg="#9F74C0"
      color="#fff"
      h="100vh"
      px={{ base: "1rem", md: "3rem", lg: "5rem", "2xl": "10rem" }}
      pt={{ base: "2rem", md: "3rem", lg: "5rem" }}
      w="100%"
    >
      <Hero />
      <Box
        py={{ base: "3rem", md: "4rem", lg: "6rem" }}
        px={{ md: "3rem", lg: "10rem" }}
      >
        <TodoInput />
        <DisplayTodoCards />
      </Box>
    </Box>
  );
};
