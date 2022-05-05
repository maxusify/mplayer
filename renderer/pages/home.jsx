import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text, HStack, Link } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";

function Home() {
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
              <Heading>Witaj! Czego chcesz dziś posłuchać?</Heading>
              <Text fontWeight="bold" py="2">
                Aktualnie posiadasz 125 utworów w bibliotece.Twoja łączna liczba
                odsłuchań to 56 758!
              </Text>
            </Flex>

            <Flex
              direction="column"
              maxW="container.lg"
              mt="10"
              textAlign="center"
            >
              <Heading fontSize="24" p="2">Twoje TOP5 ulubionych utworów</Heading>
              <Flex w="full" direction="column">
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
                <SongRow />
              </Flex>
            </Flex>

            <HStack spacing="5" justify="center" p="5">
              <Button>
                <Link href="/library">
                  <a>Przejdź do biblioteki</a>
                </Link>
              </Button>
              <Button disabled>Dodaj utwór</Button>
              <Button disabled>Historia odsłuchań</Button>
            </HStack>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Home;
