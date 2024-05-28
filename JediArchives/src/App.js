import React from 'react';
import { ChakraProvider, CSSReset, Input, Flex } from '@chakra-ui/react';
import CustomGrid from './components/grid';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />

      <Flex justify="center" align="center" height="100px">
        <Input variant="filled" placeholder="Search Character" size="md" width="30%" />
      </Flex>
      <CustomGrid />
    </ChakraProvider>
  );
}

export default App;
