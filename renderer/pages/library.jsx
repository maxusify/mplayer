import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";

function Library() {
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
              <Heading>Biblioteka utworów</Heading>
              <Text fontWeight="bold" py="2">
                Aktualnie posiadasz 125 utworów w bibliotece.Twoja łączna liczba
                odsłuchań to 56 758!
              </Text>
            </Flex>

            <Flex
              direction="column"
              maxW="container.lg"
              mt="16"
              textAlign="center"
            >
              <Flex w="full" direction="column">
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
              </Flex>
            </Flex>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Library;
