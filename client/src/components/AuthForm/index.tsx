import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { BiShow, BiHide } from "react-icons/bi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  AuthFormProps,
  FormInputs,
} from "../../modules/Authentication/auth.interface";
import { authSchema } from "../../modules/Authentication/auth.schema";

const formInputStyles = {
  autoComplete: "off",
  height: { base: "3rem", md: "3.5rem", lg: "3.5rem" },
  borderRadius: "1rem",
  border: "1px solid #979699",
  focusBorderColor: "#9F74C0",
};

export const AuthForm = ({
  buttonTitle,
  onSubmit,
}: AuthFormProps): JSX.Element => {
  const [typeInput, setTypeInput] = React.useState<string>("password");
  const [icon, setIcon] = React.useState<JSX.Element>(
    <BiHide color="#8B83BA" size={20} />
  );

  const handleToggle = () => {
    if (typeInput === "password") {
      setTypeInput("text");
      setIcon(<BiShow color="#8B83BA" size={20} />);
    } else {
      setTypeInput("password");
      setIcon(<BiHide color="#8B83BA" size={20} />);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(authSchema),
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box marginTop={{ base: "1.1rem", md: "1.5rem", lg: "2.3rem" }}>
        <Input
          {...register("username", { required: true })}
          {...formInputStyles}
          type="text"
          placeholder="Username"
        />
        <Text textAlign="left" mt=".3rem" pl={{ base: ".5rem", lg: "1rem" }}>
          {errors.username?.message}
        </Text>
      </Box>

      <Box>
        <InputGroup marginTop={{ base: "1rem", md: "1.5rem", lg: "1.563rem" }}>
          <Input
            {...register("password", { required: true })}
            {...formInputStyles}
            placeholder="Password"
            type={typeInput}
          />
          <InputRightElement
            cursor="pointer"
            children={icon}
            paddingTop={{ base: ".5rem", md: ".9rem", lg: "1rem" }}
            onClick={handleToggle}
          />
        </InputGroup>
        <Text textAlign="left" mt=".3rem" pl={{ base: ".5rem", lg: "1rem" }}>
          {errors.password?.message}
        </Text>
      </Box>

      <Box marginTop={{ base: "1rem", md: "1.5rem", lg: "1.563rem" }}>
        <Button
          type="submit"
          fontWeight="500"
          color="#fff"
          bgColor="#9F74C0"
          w="100%"
          height={{ base: "3rem", md: "3.5rem", lg: "3.5rem" }}
          borderRadius="1rem"
          fontSize={{ base: "1rem", md: "1.3rem", lg: "1.25rem" }}
          _active={{
            bgColor: "#9F74C0",
          }}
          _hover={{
            bgColor: "#9F74C0",
          }}
        >
          {buttonTitle}
        </Button>
      </Box>
    </Box>
  );
};
