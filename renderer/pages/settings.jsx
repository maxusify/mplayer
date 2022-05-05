import React from "react";
import electron from "electron";

import { Container, Flex, Heading, Button, Text, VStack, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";
import { Sidebar, Topbar, Content } from "../components";

import SongRow from "../components/songs/SongRow";

function Settings() {
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
              <Heading>Ustawienia</Heading>
              <Text fontWeight="bold" py="2">
                Spersonalizuj aplikację MPlayer do swoich potrzeb.
              </Text>

              <VStack spacing="2" mt="5" bg="gray.200" p="10" borderRadius="10">
                <Flex direction="column">
                  <Heading fontSize="20">Ustawienia ogólne</Heading>
                </Flex>
                <VStack>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Język programu</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Polski</option>
                      <option>English</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lib_dir">Język programu</FormLabel>
                    <Input id="app_lib_dir" type="text" value={`/home/${process.env.USER}/Music/MPlayer`} bg="white"/>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Tryb odtwarzacza</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Następny utwór</option>
                      <option>Powtórz utwór</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Zachowanie odtwarzacza po zakończeniu odtwarzania kolekcji</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Zacznij od początku</option>
                      <option>Nic nie rób</option>
                    </Select>
                  </FormControl>
                </VStack>
              </VStack>

              <VStack spacing="2" mt="5" bg="gray.200" p="10" borderRadius="10">
                <Flex direction="column">
                  <Heading fontSize="20">Ustawienia dodatkowe</Heading>
                </Flex>
                <VStack>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Sortowanie utworów w bibliotece</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Po nazwie</option>
                      <option>Po długości utworu</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Okładki albumów</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Włącz</option>
                      <option>Wyłącz</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Statystyki odtwarzania</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Włącz</option>
                      <option>Wyłącz</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="app_lang">Po uruchomieniu programu</FormLabel>
                    <Select id="app_lang" w="full" bg="white">
                      <option>Pozostaw otwarte</option>
                      <option>Zminimalizuj</option>
                    </Select>
                  </FormControl>
                </VStack>
              </VStack>

            </Flex>
          </Content>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Settings;
