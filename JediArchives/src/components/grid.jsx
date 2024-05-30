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
import { swapiApi } from '../api/SWDB API';
import CustomModal from '../components/modal';


function CustomGrid({ category }) {
  const [data, setData] = useState([]);
  const [selectedcategory , setSelectedcategory ] = useState(null);
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
          case 'droids':
            response = await swapiApi.getAllDroids();
            break;
          case 'vehicles':
            response = await swapiApi.getAllVehicles();
            break;
          case 'organization':
            response = await swapiApi.getAllOrganizations();
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

  const handleItemClick = (category ) => {
    setSelectedcategory (category );
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
      {!loading && data.length > 0 && (
  <Grid templateColumns="repeat(5, 1fr)" gap={6} padding={'80px'} paddingTop="auto">
    {data.map((category , index) => (
      <GridItem key={index} w="100%" h="300px">
        <Box
          bg={"blue.500"}
          backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}
          borderRadius="lg"
          p={4}
          onClick={() => handleItemClick(category )}
          style={{ cursor: 'pointer' }}
        >
          <Image src={category.image} borderRadius="lg" style={{ height: '230px', width: '300px' }} />
          <Stack mt="6" spacing="3">
            <Heading size="md" align="center" color={"white"}>
              {category.name}
            </Heading>
          </Stack>
        </Box>
      </GridItem>
    ))}
  </Grid>
)}
      {selectedcategory  && (
        <CustomModal category ={selectedcategory } onClose={() => setSelectedcategory (null)} />
      )}
    </div>
  );
}

export default CustomGrid;
