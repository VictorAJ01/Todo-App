import { Text, VStack } from "@chakra-ui/react";
import { RiTodoLine } from "react-icons/ri";

export const TodoInitialState = (): JSX.Element => {
  return (
    <VStack mt={{ base: "11rem", lg: "9rem" }}>
      <RiTodoLine size={70} />
      <Text
        textAlign="center"
        fontSize={{ base: "1.1rem", lg: "1.125rem" }}
        fontWeight="500"
      >
        You don't have a todo at the moment
      </Text>
    </VStack>
  );
};
