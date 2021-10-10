import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { chakra } from '@chakra-ui/system';
import PhotoProfile from "./assets/images/image-victor.jpg";
import BgPatternCard from "./assets/images/bg-pattern-card.svg";

function App() {

  const [user] = useState({ name: "Victor Crest", age: 26, location: "London" })
  return (
    <ChakraProvider>
      <Flex bgColor="hsl(185, 75%, 39%)" minH="100vh" justify="center" align="center">
        <Box bgColor="white" h="max-content" borderRadius="xl">
          <Box>
            <Image src={BgPatternCard} alt="bg-pattern" borderTopRadius="xl" />
          </Box>
          <chakra.header display="flex" flexDir="column" alignItems="center">
            <Image src={PhotoProfile} alt="photo-profile" w="auto" h="auto" borderRadius="full" border="6px solid #fff" mt="-54px" />
            <chakra.h1>{user.name} <chakra.span>{user.age}</chakra.span></chakra.h1>
            <Text>{user.location}</Text>
          </chakra.header>
        </Box>
      </Flex>
    </ChakraProvider>

  );
}

export default App;
