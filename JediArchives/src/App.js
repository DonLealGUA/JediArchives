import React from 'react';
import { ChakraProvider, CSSReset, Flex } from '@chakra-ui/react';
import CustomGrid from './components/grid';
import CustomNav from './components/nav';
import CustomFooter from './components/footer';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <CustomNav />
      <CustomGrid />
      <CustomFooter />
    </ChakraProvider>
  );
}

export default App;
