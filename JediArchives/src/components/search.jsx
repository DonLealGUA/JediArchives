import { useState } from 'react';
import { Flex, Input, IconButton, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { SWDBApi } from "../api/SWDB API";
import CustomModal from "../components/modal";
import React, { useEffect } from 'react';

/**
 * Search function to find a specific item within a category
 */
function CustomSearch({ category }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errorAlert, setErrorAlert] = useState(false); 

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  /**
   * Search depends on selected Category
   */
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      let response;
      switch (category.toLowerCase()) {
        case "characters":
          response = await SWDBApi.getSearchedCharacters(searchQuery);
          break;
        case "planets":
          response = await SWDBApi.getSearchedPlanets(searchQuery);
          break;
        case "droids":
          response = await SWDBApi.getSearchedDroids(searchQuery);
          break;
        case "vehicles":
          response = await SWDBApi.getSearchedVehicles(searchQuery);
          break;
        case "organization":
          response = await SWDBApi.getSearchedOrganizations(searchQuery);
          break;
        default:
          response = [];
      }
      if (response != null) {
        setSearchResults(response);
        onOpen();
        setErrorAlert(false); 
      } else {
        setErrorAlert(true); 
        console.error("No matches found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let timeout;
    if (errorAlert) {
      timeout = setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [errorAlert]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <Box position="relative"> 
      <Flex
        justify="center"
        align="center"
        height="80px"
        position="relative" 
        p={4}
      >
        <Input
          placeholder={`Search ${category}`}
          size='lg'
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          color='black'
          borderColor="black"
          borderRadius="md"
          width="500px"
          _focus={{ borderColor: 'teal.700', boxShadow: 'outline' }}
          mr={2}
        />
        <IconButton
          aria-label='Search database'
          icon={<SearchIcon />}
          onClick={handleSearch}
          colorScheme="black"
          color={"black"}
          borderColor={"black"}
        />
        {isOpen && (
          <CustomModal category={searchResults} onClose={onClose} />
        )}
      </Flex>
      {errorAlert && (
        <Alert
          status='error'

          w="fit-content"
          position="absolute" 
          right={4} 
          top={4} 
          opacity={0.8}
        >
          <AlertIcon />
          <AlertTitle>Sorry!</AlertTitle>
          <AlertDescription>Your Search does not exist!</AlertDescription>
        </Alert>
      )}
    </Box>
  );
  
}

export default CustomSearch;
