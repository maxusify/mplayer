import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text, HStack, VStack, Link } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";
import { FiList, FiMinus, FiPlus, FiStar } from "react-icons/fi";

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
            {/* Nagłówek */}
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
              <HStack spacing="2" justify="center">
                <Button leftIcon={<FiPlus />} bg="green.100" disabled>Dodaj utwór</Button>
                <Button leftIcon={<FiStar />} bg="yellow.100" disabled>Dodaj do ulubionych</Button>
                <Button leftIcon={<FiMinus />} bg="red.100" disabled>Usuń utwór</Button>
                <Button leftIcon={<FiList />} bg="blue.100">
                  <Link href="/collections">
                    <a>Kolekcje</a>
                  </Link>
                </Button>
              </HStack>
            </Flex>

            {/* Lista utworów */}
            <Flex
              direction="column"
              maxW="container.lg"
              mt="5"
              textAlign="center"
            >
              <VStack spacing="1" justify="center">
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
              </VStack>
            </Flex>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Library;
