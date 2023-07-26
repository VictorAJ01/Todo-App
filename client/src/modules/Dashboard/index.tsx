import { Box } from "@chakra-ui/react";
import { Hero } from "./components/hero";
import { TodoInput } from "./components/todo_input";
import { DisplayTodoCards } from "./components/display_todo_cards";

export const Dashboard = (): JSX.Element => {
  return (
    <Box
      bg="#9F74C0"
      color="#fff"
      h="100vh"
      px={{ base: "1rem", md: "3rem", lg: "5rem", "2xl": "10rem" }}
      pt={{ base: "2rem", md: "3rem", lg: "5rem" }}
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
