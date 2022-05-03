import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SongRow from "./songs/SongRow";

function Content({ children }) {
  return (
    <Flex
      w="full"
      maxH="100vh"
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      overflowY="scroll"
    >
      {children}
    </Flex>
  );
}

export default Content;
