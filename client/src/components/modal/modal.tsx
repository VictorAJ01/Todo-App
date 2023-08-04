import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { ChakraDisclosure } from "./modal_types";

interface IGeneralModalProps extends ChakraDisclosure {
  children: React.ReactNode;
}

const GeneralModal = ({ isOpen, onClose, children }: IGeneralModalProps) => {
  return (
    <Box>
      <Modal
        size={{ base: "sm", md: "md" }}
        motionPreset="slideInBottom"
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GeneralModal;
