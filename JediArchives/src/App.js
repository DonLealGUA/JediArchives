import React, { useState } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import CustomNav from './components/nav';
import CustomGrid from './components/grid';
import CustomFooter from './components/footer';
import CustomSearch from './components/search';

function App() {
  const [category, setCategory] = useState('characters');
  const [page, setPage] = useState(1);

  return (
    <ChakraProvider>
      <CSSReset />
      <CustomNav setCategory={setCategory} />
      <CustomSearch category={category}/>
      <CustomGrid category={category}/>
      <CustomFooter/>
    </ChakraProvider>
  );
}

export default App;