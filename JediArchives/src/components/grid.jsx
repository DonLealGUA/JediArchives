import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  CSSReset,
  Grid,
  GridItem,
  Box,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { swapiApi } from '../api/SwapiAPI';
import CustomModal from '../components/modal';

function CustomGrid() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterUrl, setSelectedCharacterUrl] = useState(null);

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

  const handleCharacterClick = (character) => {
    setSelectedCharacterUrl(character.url); 
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Grid templateColumns="repeat(5, 1fr)" gap={6} padding={'80px'} paddingTop="auto">
        {characters.map((character, index) => (
          <GridItem key={index} w="100%" h="300px">
            <Box
              bg={"blue.500"}
              backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}
              borderRadius="lg"
              p={4}
              onClick={() => handleCharacterClick(character)} 
              style={{ cursor: 'pointer' }} 
            >
            <Image src={process.env.PUBLIC_URL + '/assets/images/characters/' + character.name + '.jpg'} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md" align="center" color={"white"}>
                  {character.name}
                </Heading>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      {selectedCharacterUrl && (
        <CustomModal url={selectedCharacterUrl} onClose={() => setSelectedCharacterUrl(null)} />
      )}
    </ChakraProvider>
  );
}

export default CustomGrid;
