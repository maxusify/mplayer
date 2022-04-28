import { Button, HStack, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

function Topbar() {
  return (
    <HStack w="full" h={35} bgColor="gray.300" py="2">
      {/* Pasek menu */}
      <UnorderedList
        width="sm"
        display="flex"
        alignItems="flex-start"
        flexDir="row"
        justifyContent="space-evenly"
        listStyleType="none"
      >
        <ListItem fontWeight="bold">MPlayer</ListItem>
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
