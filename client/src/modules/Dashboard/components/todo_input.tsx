import {
  Box,
  Circle,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { RiTodoLine } from "react-icons/ri";

export const TodoInput = (): JSX.Element => {
  return (
    <Box color="black">
      <InputGroup
        bgColor="#F4F2FF"
        borderRadius={{ base: ".5rem", lg: "1.5rem" }}
        display="flex"
        alignItems="center"
      >
        <InputLeftElement
          pt=".5rem"
          pointerEvents="none"
          children={<RiTodoLine color="#8B83BA" size={20} />}
        />
        <Input
          h={{ md: "3rem" }}
          type="text"
          placeholder="Put your tasks in order, put your mind at ease."
          focusBorderColor="none"
          _placeholder={{
            fontSize: ".9rem",
          }}
        />
      </InputGroup>
    </Box>
  );
};
