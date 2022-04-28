import React from "react";
import Head from "next/head";
import Link from "next/link";

import electron from "electron";
import { Container, Flex, VStack } from "@chakra-ui/react";
import Topbar from "../components/Topbar";

function Home() {
  const ipcRenderer = electron.ipcRenderer || false;

  if (ipcRenderer) {
    //...
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100hv" py={20} bgColor="red.100">
        {/* Topbar */}
        <Topbar />
        {/* Sidebar */}

        {/* Content */}
      </Flex>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
      ></VStack>
    </Container>
  );
}

export default Home;
