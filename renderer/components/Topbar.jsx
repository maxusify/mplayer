import { Button, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import { AiFillPlaySquare } from "react-icons/ai";
import React from "react";

function Topbar() {
  return (
    <HStack w="full" h={35} bgColor="gray.300" py="2">
      {/* Pasek menu */}
      <UnorderedList
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        py={10}
      >
        <ListItem>
          <AiFillPlaySquare /> MPlayer
        </ListItem>
        <ListItem>Plik</ListItem>
        <ListItem>Edycja</ListItem>
        <ListItem>Widok</ListItem>
        <ListItem>Pomoc</ListItem>
      </UnorderedList>
      {/* Pasek manipulacją okna */}
      <HStack></HStack>
    </HStack>
  );
}

export default Topbar;
