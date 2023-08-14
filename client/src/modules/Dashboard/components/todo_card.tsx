import { Box, Checkbox, Circle, HStack, Text } from "@chakra-ui/react";
import { TodoResponsePayload } from "../dashboard_type";

interface Props {
  item: TodoResponsePayload;
  handleSelectedId: (id: string) => void;
}

export const TodoCard = ({ item, handleSelectedId }: Props): JSX.Element => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack spacing={{ base: 2, md: 4 }}>
        <Circle size={3} bg={item.color} />
        <Text>{item.todo}</Text>
      </HStack>
      <HStack spacing={{ base: 2, md: 4 }}>
        <Checkbox
          size="lg"
          colorScheme="purple"
          onChange={() => handleSelectedId(item._id)}
        />
      </HStack>
    </Box>
  );
};
