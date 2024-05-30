import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { swapiApi } from '../api/SwapiAPI';
import CustomModal from '../components/modal';

function CustomGrid({ category }) {
  const [data, setData] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        switch (category) {
          case 'characters':
            response = await swapiApi.getAllCharacters();
            break;
          case 'planets':
            response = await swapiApi.getAllPlanets();
            break;
          case 'starships':
            response = await swapiApi.getAllStarShips();
            break;
          case 'vehicles':
            response = await swapiApi.getAllVehicles();
            break;
          case 'movies':
            response = await swapiApi.getAllMovies();
            break;
          default:
            response = [];
        }
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  const handleItemClick = (item) => {
    setSelectedUrl(item.url);
  };

  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} padding={'80px'} paddingTop="auto">
        {data.map((item, index) => (
          <GridItem key={index} w="100%" h="300px">
            <Box
              bg={"blue.500"}
              backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}
              borderRadius="lg"
              p={4}
              onClick={() => handleItemClick(item)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={process.env.PUBLIC_URL + `/assets/images/${category}/${item.name || item.title}.jpg`} borderRadius="lg" style={{ height: '230px', width: '300px' }} />
              <Stack mt="6" spacing="3">
                <Heading size="md" align="center" color={"white"}>
                  {item.name || item.title}
                </Heading>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>
      {selectedUrl && (
        <CustomModal url={selectedUrl} onClose={() => setSelectedUrl(null)} />
      )}
    </div>
  );
}

export default CustomGrid;
