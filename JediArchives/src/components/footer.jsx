import React from 'react';
import { Flex } from '@chakra-ui/react';

function CustomFooter() {
  return (
    <Flex
      justify="center"
      align="center"
      height="80px"
      bg="black"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      color={"White"}
      backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}
    >
      <p>@Jedi Archives</p>
    </Flex>
  );
}

export default CustomFooter;
