import { Flex, Image, Text, Button, Spacer } from '@chakra-ui/react';

function CustomNav() {
  return (
    <Flex justify="space-between" align="center" height="80px" bg="black" px={4} backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}>
      <Flex align="center">
        <Image marginLeft={"50px"} src={process.env.PUBLIC_URL + '/assets/images/Starwars-logo.png'} alt="Star Wars Logo" maxHeight="60px" />
        <Text marginLeft={"50px"} color={"gold"} fontSize={"30px"} fontWeight={"bold"} fontFamily={"roboto"}> Jedi Archives</Text>
      </Flex>
      <Flex>
        <Button marginRight="10px" /*onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])}*/>Characters</Button>
        <Button marginRight="10px" /*onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])}*/>Planets</Button>
        <Button marginRight="10px" /*onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])}*/>StarShips</Button>
        <Button marginRight="10px" /*onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])}*/>Vehicles</Button>
        <Button marginRight="10px" /*onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])}*/>Movies</Button>
      </Flex>
    </Flex>
  );
}

export default CustomNav;
