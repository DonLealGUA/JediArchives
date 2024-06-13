import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Stack,
  Heading,
  Spinner,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SWDBApi } from "../api/SWDB API";
import CustomModal from "../components/modal";

function CustomGrid({category}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedcategory, setSelectedcategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const prevCategoryRef = useRef(null);

  /**
   * Displays content based on Category selected in the Navbar
   */
  useEffect(() => {
    const fetchData = async () => {
      try {  
        setLoading(true);
        let response;
        switch (category) {
          case "characters":
            response = await SWDBApi.getAllCharacters(page);
            break;
          case "planets":
            response = await SWDBApi.getAllPlanets(page);
            break;
          case "droids":
            response = await SWDBApi.getAllDroids(page);
            break;
          case "vehicles":
            response = await SWDBApi.getAllVehicles(page);
            break;
          case "organization":
            response = await SWDBApi.getAllOrganizations(page);
            break;
          default:
            response = [];
        }
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    /** 
     * Checks so that the previous category is the current category and has not changed
     * Else the page number resets to 1
     */ 
    if (prevCategoryRef.current !== null && category !== prevCategoryRef.current) {
      if (!(prevCategoryRef.current === "character" && category === "characters")) {
        setPage(1);
      }
    }
    prevCategoryRef.current = category;
    fetchData();
  }, [category, page]);


  /**
   * Sends the object to modal 
   */  
  const handleItemClick = (category) => {
    setSelectedcategory(category);
  };

  /**
   * Handels the next page counter
   */
  const goToNextPage = () => {
    setPage(page + 1);
  };

  /**
   * Handels the prev page counter
   * Also makes sure it cant go below 1
   */
  const goToPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
      {!loading && data.length > 0 && (
        <div>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={6}
            padding={"80px"}
            paddingTop="auto"
          >
            {data.map((category, index) => (
              <GridItem key={index} w="100%" h="300px">
                <Box
                  bg={"blue.500"}
                  backgroundImage={
                    process.env.PUBLIC_URL + "/assets/images/galaxia.png"
                  }
                  borderRadius="lg"
                  p={4}
                  onClick={() => handleItemClick(category)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={category.image}
                    borderRadius="lg"
                    style={{ height: "230px", width: "300px" }}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md" align="center" color={"white"}>
                      {category.name}
                    </Heading>
                  </Stack>
                </Box>
              </GridItem>
            ))}
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            <Flex alignItems="center">
            <Button colorScheme='black' variant='outline' opacity={page === 1 ? 0.5 : 1} onClick={goToPrevPage} disabled={page === 1}>Previous Page</Button>

              <Text ml={4}>{page}</Text>
              <Button
                colorScheme="black"
                variant="outline"
                color="black"
                onClick={goToNextPage}
                ml={4}
              >
                Next Page
              </Button>
            </Flex>
          </div>
        </div>
      )}
      {selectedcategory && (
        <CustomModal
          category={selectedcategory}
          onClose={() => setSelectedcategory(null)}
        />
      )}
    </div>
  );
}

export default CustomGrid;
