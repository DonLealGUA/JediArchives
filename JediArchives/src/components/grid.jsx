import React, { useState, useEffect } from 'react';
import { ChakraProvider, CSSReset, Grid, GridItem } from '@chakra-ui/react';
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
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {characters.map((character, index) => (
          <GridItem key={index} w="100%" h="300px" bg="blue.500">
            <p>{character.name}</p>
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
}

export default CustomGrid;
