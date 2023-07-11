import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const AuthLayout = (): JSX.Element => {
  return (
    <Box
      as="main"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Outlet />
    </Box>
  );
};
