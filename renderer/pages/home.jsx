import React from "react";
import electron from "electron";

import { Container, Flex, VStack } from "@chakra-ui/react";

import { Sidebar, Topbar, Content } from "../components";

function Home() {
  const ipcRenderer = electron.ipcRenderer || false;

  if (ipcRenderer) {
    //...
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100hv">
        {/* Topbar */}
        <Topbar />
        {/* Sidebar */}
        <VStack>
          <Sidebar />
          <Content />
        </VStack>
      </Flex>
    </Container>
  );
}

export default Home;
