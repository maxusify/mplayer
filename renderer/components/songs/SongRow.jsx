import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";

function SongRow(props) {
  return (
    <Flex
      w="container.md"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p="2"
      bg="gray.100"
      borderRadius={10}
      mb="1"
    >
      <Flex direction="row" alignItems="center" justifyContent="center">
        {/* Cover */}
        <Image
          h="14"
          src="https://cdn.discordapp.com/attachments/213066003230228480/971134881553866812/pobrane.jpeg"
          alt="Album cover"
        />

        {/* Tytuł i wykonawca */}
        <Flex
          px="5"
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text fontWeight="bold">Can You Feel My Heart</Text>
          <Text>Bring Me The Horizon</Text>
        </Flex>
      </Flex>

      {/* Przycisk odtwarzania */}
      <IconButton icon={<FiPlay />} />
    </Flex>
  );
}

export default SongRow;
