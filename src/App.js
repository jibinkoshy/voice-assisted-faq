import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Faq } from './faq';
import { FaqPage } from './FaqPage';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <FaqPage />
    </ChakraProvider>
  );
};
