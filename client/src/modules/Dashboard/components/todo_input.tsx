import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { RiTodoLine } from "react-icons/ri";
import { MdAdd } from "react-icons/md";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    todo: yup.string().required("Input field is required"),
  })
  .required();

interface FormInput {
  todo: string;
}

export const TodoInput = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w={{ lg: "100%" }}
        justifyContent="center"
        alignItems={{ lg: "center" }}
        gap={{ lg: "2rem" }}
      >
        <Box color="black" w={{ lg: "43rem" }}>
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
              {...register("todo", { required: true })}
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
        <Box>
          <Button type="submit" py="1.5rem" px="1.3rem" leftIcon={<MdAdd />}>
            Create
          </Button>
        </Box>
      </Flex>
      <Text
        color="red"
        textAlign="left"
        mt=".3rem"
        pl={{ base: ".5rem", lg: "2rem" }}
      >
        {errors.todo?.message}
      </Text>
    </Box>
  );
};
