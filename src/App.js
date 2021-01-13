import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { FaqPage } from './FaqPage';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';

export const App = () => {
  const alanBtnInstance = useRef(null);

  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          '244691f9b0411585c1a56590f07475162e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart',
            });
            setIndex(commandData.faqId - 1);
          }
        },
      });
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <FaqPage index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};
