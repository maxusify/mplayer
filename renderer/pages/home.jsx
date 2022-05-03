import React from "react";
import electron from "electron";

import { Container, Flex, HStack } from "@chakra-ui/react";

import { Sidebar, Topbar, Content } from "../components";

function Home() {
  const ipcRenderer = electron.ipcRenderer || false;

  if (ipcRenderer) {
    //...
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" overflow="hidden">
        <Topbar />
        <HStack w="100vw">
          <Sidebar />
          <Content />
        </HStack>
      </Flex>
    </Container>
  );
}

export default Home;
