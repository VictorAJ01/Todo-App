import { Avatar, Box, Button, HStack, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

export const Hero = (): JSX.Element => {
  return (
    <Box
      fontFamily="heading"
      display={{ md: "flex" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack>
        <Box border="5px solid #F2EDEE" rounded="full">
          <Avatar
            size={{ base: "lg", md: "xl" }}
            name="Victor AJ"
            src="https://bit.ly/sage-adebayo"
          />
        </Box>
        <Box>
          <Text
            fontWeight="600"
            fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.1rem" }}
            fontFamily="body"
          >
            Welcome Victor AJ!
          </Text>
          <Text
            fontSize={{ base: "1rem", md: "1.125rem" }}
            pl={{ base: ".2rem", lg: ".3rem" }}
            mt="-.2rem"
          >
            Make every day count with a to-do list...
          </Text>
        </Box>
      </HStack>

      <Box display={{ base: "none", md: "initial" }}>
        <Button py="1.5rem" px="1.3rem" leftIcon={<FiLogOut />}>
          Sign out
        </Button>
      </Box>
    </Box>
  );
};
