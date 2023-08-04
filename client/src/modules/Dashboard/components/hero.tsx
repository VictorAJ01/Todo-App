import {
  Avatar,
  Box,
  Button,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { SignOutModal } from "../../../components/modal/sign_out_modal";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../redux/app/store";

export const Hero = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userDetailsState = useAppSelector(
    (state: RootState) => state.userDetails
  );

  const { response } = userDetailsState;

  return (
    <Box>
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
              name={response && response?.user.username}
              src="https://bit.ly/sage-adebayo"
            />
          </Box>
          <Box>
            <Text
              fontWeight="600"
              fontSize={{ base: "1.5rem", md: "1.8rem", lg: "2.1rem" }}
              fontFamily="body"
            >
              Welcome {response?.user.username ?? "Dear"}!
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

        <Box onClick={onOpen} display={{ base: "none", md: "initial" }}>
          <Button py="1.5rem" px="1.3rem" leftIcon={<FiLogOut />}>
            Sign out
          </Button>
        </Box>
      </Box>
      <SignOutModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
