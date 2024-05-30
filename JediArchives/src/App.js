import React, { useState } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomNav from './components/nav';
import CustomGrid from './components/grid';

function App() {
  const [category, setCategory] = useState('characters');

  return (
    <ChakraProvider>
      <CSSReset />
      <CustomNav setCategory={setCategory} />
      <CustomGrid category={category} />
    </ChakraProvider>
  );
}

export default App;
