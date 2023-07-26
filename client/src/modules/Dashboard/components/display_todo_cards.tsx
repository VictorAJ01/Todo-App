import { Box, HStack } from "@chakra-ui/react";
import { TodoCard } from "./todo_card";
import { TodoData } from "./todo_data";
import { TodoResponseObject } from "../dashboard_type";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

export const DisplayTodoCards = (): JSX.Element => {
  const [selectedId, setSelectedId] = React.useState<Array<string>>([]);

  const handleSelectedId = (id: string) => {
    if (id) {
      if (selectedId.includes(id)) {
        const currentId = selectedId.filter((item) => item != id);
        setSelectedId(currentId);
      } else setSelectedId((prev) => [...prev, id]);
    }
  };

  return (
    <Box
      py={{ base: "2rem", md: "3rem", lg: "3rem" }}
      px={{ base: "1rem", md: "2rem" }}
      display="flex"
      flexDir="column"
      gap={{ base: "1rem", md: "1.5rem" }}
    >
      {TodoData.map((item: TodoResponseObject) => {
        return (
          <HStack
            px={{ base: ".5rem", md: "1rem" }}
            py={{ base: ".5rem", md: "1rem" }}
            borderRadius={{ lg: "1rem" }}
            bg="#F4F2FF"
            color="black"
            key={item.id}
            spacing={4}
          >
            <TodoCard item={item} handleSelectedId={handleSelectedId} />

            <Box display={selectedId.includes(item.id) ? "initial" : "none"}>
              <MdDeleteOutline size={22} color="#111" />
            </Box>
          </HStack>
        );
      })}
    </Box>
  );
};
