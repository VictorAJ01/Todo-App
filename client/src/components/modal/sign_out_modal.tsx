import { Box, Button, Flex, Text } from "@chakra-ui/react";
import GeneralModal from "./modal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { resetAuthState } from "../../modules/Authentication/Slices/sign_up_slice";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

export const SignOutModal = ({ onClose, isOpen }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(resetAuthState());
    navigate("/login", { replace: true });
  };

  return (
    <GeneralModal isOpen={isOpen} onClose={onClose}>
      <Box>
        <Box
          textAlign="center"
          pt={{ base: "3rem", md: "4rem", lg: "4.5rem" }}
          pb={{ base: "3rem", md: "3rem", lg: "4rem" }}
        >
          <Text fontSize={{ base: "1.15rem", md: "1.25rem" }}>
            Are you sure you want to
            <Text as="span" color="primary" fontWeight="bold">
              {" "}
              Logout?
            </Text>
          </Text>
        </Box>
        <Flex gap="1rem" alignItems="center" pb=".5rem">
          <Button
            bgColor="#E6E3E3"
            _hover={{ bg: "#E6E3E3" }}
            _active={{ bg: "#E6E3E3" }}
            color="#4A4B4D"
            onClick={onClose}
            width="50%"
            size={{ base: "md", lg: "lg" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleNavigate}
            bgColor="#9F74C0"
            _active={{
              bgColor: "#9F74C0",
            }}
            _hover={{
              bgColor: "#9F74C0",
            }}
            color="#fff"
            width="50%"
            size={{ base: "md", lg: "lg" }}
          >
            Confirm
          </Button>
        </Flex>
      </Box>
    </GeneralModal>
  );
};
