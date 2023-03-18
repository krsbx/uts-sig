import { Flex, Text } from '@chakra-ui/react';

function App() {
  return (
    <Flex
      backgroundColor={'gray.800'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
    >
      <Text
        color={'gray.200'}
        fontWeight={'bold'}
        fontSize={'3xl'}
        textTransform={'uppercase'}
        letterSpacing={'1rem'}
      >
        The Frontend
      </Text>
    </Flex>
  );
}

export default App;
