import { Flex, Button, Stack, IconButton, Icon, Link } from "@chakra-ui/react";
import { FiX, FiMinimize, FiHeadphones as LogoIcon, FiSettings } from "react-icons/fi";
import React from "react";

function Topbar() {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="full"
      h={35}
      py="2"
      shadow="md"
      position="fixed"
      bg="white"
    >
      <Stack direction="row" spacing={4}>
        <Button
          variant="unstyled"
          leftIcon={<LogoIcon />}
          paddingLeft="3"
          fontSize={14}
        >
          MPlayer
        </Button>
        <Button variant="unstyled" fontWeight="normal" fontSize={14}>
          Plik
        </Button>
        <Button variant="unstyled" fontWeight="normal" fontSize={14}>
          Edycja
        </Button>
        <Button variant="unstyled" fontWeight="normal" fontSize={14}>
          Widok
        </Button>
        <Button variant="unstyled" fontWeight="normal" fontSize={14}>
          Pomoc
        </Button>
      </Stack>
      <Stack direction="row" spacing={0}>
        <IconButton icon={<FiMinimize />} variant="ghost" />
        <IconButton icon={<FiX />} variant="ghost" />
      </Stack>
    </Flex>
  );
}

export default Topbar;
