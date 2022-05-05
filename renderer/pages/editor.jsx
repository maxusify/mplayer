import React from "react";
import electron from "electron";

import {
  Container,
  Flex,
  Heading,
  Button,
  Text,
  VStack,
  Input,
  Image,
  FormControl,
  FormLabel,
  HStack,
} from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";

function Editor() {
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
              <Heading>Edytor metadanych</Heading>
              <Text fontWeight="bold" py="2">
                Witaj w edytorze metadanych! Narzędzie to pozwoli Ci na
                dodawanie i modyfikowanie metadanych twoich plików muzycznych.
                Wybierz plik poniżej i zacznij edycję.
              </Text>
            </Flex>

            <Flex
              w="container.sm"
              direction="column"
              p="5"
              bg="gray.200"
              borderRadius={10}
            >
              <Heading fontSize="24" pb="3">
                Wybierz plik do edycji
              </Heading>
              <Input type="file" variant="unstyled" />
            </Flex>

            <Flex
              direction="row"
              w="container.sm"
              p="5"
              bg="gray.200"
              borderRadius={10}
              mt="5"
            >
              <Image
                w={250}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F69ebf361165361.5ccae5afafb1b.jpg&f=1&nofb=1"
                alt=""
              />

              <VStack spacing={1}>
                <FormControl px="5">
                  <FormLabel htmlFor="title">Tytuł</FormLabel>
                  <Input id="title" type="text" bg="white"/>
                </FormControl>
                <FormControl px="5">
                  <FormLabel htmlFor="artist">Wykonawca</FormLabel>
                  <Input id="artist" type="text" bg="white"/>
                </FormControl>
                <FormControl px="5">
                  <FormLabel htmlFor="album">Album</FormLabel>
                  <Input id="album" type="text" bg="white"/>
                </FormControl>
              </VStack>
            </Flex>

            <HStack spacing="2" bg="gray.200" p="5" borderRadius={10} mt="5">
                <Button>Anuluj</Button>
                <Button>Zapisz</Button>
            </HStack>

          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Editor;
