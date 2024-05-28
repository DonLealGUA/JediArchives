import React from 'react';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import CustomGrid from './components/grid';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />

      <Flex justify="center" align="center" height="80px" pad bg={"black"}>
        {/*<Input variant="filled" placeholder="Search Character" size="md" width="30%" />*/}
      </Flex>
      <CustomGrid />
    </ChakraProvider>
  );
}

export default App;
