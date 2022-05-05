import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text, HStack } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";
import { FiList, FiMinus, FiPlus, FiStar } from "react-icons/fi";
import Link from "next/link";
import AlbumTile from "../components/songs/AlbumTile";

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
              <Heading>Biblioteka kolekcji</Heading>
              <Text fontWeight="bold" py="2">
                Tu znajdziesz stworzone przez siebie kolekcje i playlisty.
              </Text>
              <HStack spacing="2" justify="center">
                <Button leftIcon={<FiPlus />} bg="green.100" disabled>Dodaj nową</Button>
                <Button leftIcon={<FiStar />} bg="yellow.100" disabled>Dodaj do ulubionych</Button>
                <Button leftIcon={<FiMinus />} bg="red.100" disabled>Usuń</Button>
                <Button leftIcon={<FiList />} bg="blue.100">
                  <Link href="/library">
                    <a>Utwory</a>
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
              <Flex w="full" direction="row" wrap="wrap" justifyContent="center">
                <AlbumTile id="1"/>
                <AlbumTile id="2"/>
                <AlbumTile id="3"/>
                <AlbumTile id="4"/>
                <AlbumTile id="5"/>
                <AlbumTile id="6"/>
                <AlbumTile id="7"/>
                <AlbumTile id="8"/>
              </Flex>
            </Flex>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Collections;
