import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function AlbumTile(props) {
  return (
    <VStack spacing="1" justify="center">
        <Image h={250} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2F69ebf361165361.5ccae5afafb1b.jpg&f=1&nofb=1" alt="Album cover" p="3"/>
        <Text>Kolekcja #{props.id}</Text>
    </VStack>
  )
}

export default AlbumTile