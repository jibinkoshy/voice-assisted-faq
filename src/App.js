import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
};
