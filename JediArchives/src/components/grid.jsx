import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset, Grid, GridItem, Box, Image, Stack, Heading } from '@chakra-ui/react';
import { swapiApi } from '../api/SwapiAPI';

function CustomGrid() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await swapiApi.getAllCharacters();
        setCharacters(response);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <ChakraProvider>
      <CSSReset />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} padding={"80px"} paddingTop="auto">
        {characters.map((character, index) => (
          <GridItem key={index} w="100%" h="300px">
            <Box bg="blue.500" borderRadius="lg" p={4}>
              <Image
                src={`../assets/images/characters/Beru Whitesun lars.jpg`}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md' align="center">{character.name}</Heading>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}

export default CustomGrid;
