import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";

function Collections() {
  const ipcRenderer = electron.ipcRenderer || false;

  if (ipcRenderer) {
    //...
  }

  return (
    <Container maxW="full" p={0}>
      <Flex direction="column">
        <Topbar />
        <Flex w="100vw" direction="row">
          <Sidebar />
          <Content>
            <Flex
              direction="column"
              maxW="container.lg"
              mt="16"
              textAlign="center"
            >
              <Heading>Kolekcje</Heading>
              <Text fontWeight="bold" py="2">
                Witaj w edytorze metadanych! Narzędzie to pozwoli Ci na
                dodawanie i modyfikowanie metadanych twoich plików muzycznych.
                Wybierz plik poniżej i zacznij edycję.
              </Text>
            </Flex>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Collections;
