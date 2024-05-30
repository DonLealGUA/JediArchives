import React, { useState, useEffect } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Image,
  Stack,
  Heading,
  Spinner 
} from '@chakra-ui/react';
import { swapiApi } from '../api/SwapiAPI';
import CustomModal from '../components/modal';

function CustomGrid({ category }) {
  const [data, setData] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const handleItemClick = (item) => {
    setSelectedUrl(item.url);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {loading && ( 
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </div>
      )}
      {!loading && (
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
      )}
      {selectedUrl && (
        <CustomModal url={selectedUrl} onClose={() => setSelectedUrl(null)} />
      )}
    </div>
  );
}

export default CustomGrid;
