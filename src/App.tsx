import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { chakra } from '@chakra-ui/system';
import "@fontsource/kumbh-sans"
import PhotoProfile from "./assets/images/image-victor.jpg";
import BgPatternCard from "./assets/images/bg-pattern-card.svg";

const theme = extendTheme({
  colors: {
    brand: {
      'dark-cyan': "hsl(185, 75%, 39%)",
      'very-dark-blue': "hsl(229, 23%, 23%)",
      'dark-grayish-blue': "hsl(227, 10%, 46%)",
      'dark-gray': "hsl(0, 0%, 59%)"
    }
  },
  fonts: {
    heading: "Kumbh Sans",
    body: "Kumbh Sans",
  }
})

function App() {
  const [user] = useState({ name: "Victor Crest", age: 26, location: "London" })
  const [stat] = useState({ followers: "80K", likes: "803K", photos: "1.4K" })

  return (
    <ChakraProvider theme={theme}>
      <Flex bgColor="hsl(185, 75%, 39%)" minH="100vh" justify="center" align="center" fontSize="lg" fontWeight="400">
        <Box bgColor="white" h="max-content" borderRadius="xl">
          <Box>
            <Image src={BgPatternCard} alt="bg-pattern" borderTopRadius="xl" />
          </Box>
          <chakra.header display="flex" flexDir="column" alignItems="center" gridRowGap="1" borderBottom="1px solid #969696">
            <Image src={PhotoProfile} alt="photo-profile" w="auto" h="auto" borderRadius="full" border="6px solid #fff" mt="-54px" />
            <chakra.h1
              fontWeight="700"
              mt="2">
              {user.name}
              <chakra.span color="brand.dark-gray" fontWeight="400">&nbsp;{user.age}</chakra.span>
            </chakra.h1>
            <Text color="brand.dark-gray" fontSize="sm" mb="4">{user.location}</Text>
          </chakra.header>
          <Flex my="6" mx="2" gridColumnGap="2" justify="space-around">
            <Box textAlign="center">
              <Text fontWeight="700">{stat.followers}</Text>
              <Text fontSize="sm" color="brand.dark-gray">Followers</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700">{stat.likes}</Text>
              <Text fontSize="sm" color="brand.dark-gray">Likes</Text>
            </Box>
            <Box textAlign="center">
              <Text fontWeight="700">{stat.photos}</Text>
              <Text fontSize="sm" color="brand.dark-gray">Photos</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>

  );
}

export default App;
