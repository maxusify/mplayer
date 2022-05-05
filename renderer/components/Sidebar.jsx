import {
  Flex,
  Heading,
  Button,
  HStack,
  Image,
  Box,
  Text,
  IconButton,
  Progress,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
  FiHome,
  FiList,
  FiPause,
  FiRepeat,
  FiSettings,
  FiVolume,
} from "react-icons/fi";
import AlbumRow from "./songs/AlbumRow";

function Sidebar() {
  return (
    <Flex minW={300} h="100vh" bg="gray.100">
      <Flex
        w="fit-content"
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        boxSizing="border-box"
      >
        <Box p={5} mt={10}>
          {/* Główny nagłówek */}
          <Heading fontSize="md">Szybkie Menu</Heading>

          {/* Podmenu ogólne */}
          <Flex w="full" direction="column" p={2} mt={1}>
            <Heading fontSize="sm">Ogólne</Heading>
            <Flex direction="column" alignItems="flex-start" p={2}>
              <Button leftIcon={<FiHome />} fontSize="sm" variant="unstyled">
                <Link href="/home">
                  <a>Strona Główna</a>
                </Link>
              </Button>
              <Button leftIcon={<FiList />} fontSize="sm" variant="unstyled">
                <Link href="/library">
                  <a>Biblioteka</a>
                </Link>
              </Button>
              <Button leftIcon={<FiEdit />} fontSize="sm" variant="unstyled">
                <Link href="/editor">
                  <a>Edytor</a>
                </Link>
              </Button>
              <Button leftIcon={<FiSettings />} fontSize="sm" variant="unstyled">
                <Link href="/settings">
                  <a>Ustawienia</a>
                </Link>
              </Button>
            </Flex>
          </Flex>

          {/* Podmenu kolekcji */}
          <Flex w="full" direction="column" p={2}>
            <Heading fontSize="sm">Kolekcje</Heading>
            <VStack w="full" spacing="2" p={2}>
              <AlbumRow id="1" />
              <AlbumRow id="2" />
              <AlbumRow id="3" />
              <AlbumRow id="4" />
              <AlbumRow id="5" />
            </VStack>
          </Flex>
        </Box>

        {/* Player */}
        <HStack w="full" bg="gray.200" p={5}>
          <Image
            w="20"
            src="https://cdn.discordapp.com/attachments/213066003230228480/971067819875770418/Screenshot_03-05-2022_17-16.png"
            alt="Song cover"
          />
          <Flex direction="column">
            <Flex direction="column">
              <Text fontWeight="bold">Song title</Text>
              <Text fontWeight="normal">Song artist</Text>
            </Flex>

            <Flex direction="column">
              <HStack spacing="1">
                <IconButton size="sm" icon={<FiRepeat />} />
                <IconButton size="sm" icon={<FiArrowLeft />} />
                <IconButton size="sm" icon={<FiPause />} />
                <IconButton size="sm" icon={<FiArrowRight />} />
                <IconButton size="sm" icon={<FiVolume />} />
              </HStack>
            </Flex>

            <Stack spacing={5} mt="2">
              <Progress
                colorScheme="blue"
                borderRadius="lg"
                size="sm"
                value={20}
              />
            </Stack>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
