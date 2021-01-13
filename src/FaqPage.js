import React from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

export const FaqPage = () => {
  return (
    <Flex direction="column" p="4">
      <Box mb="8">
        <Heading size="md"> Frequently asked Question</Heading>
      </Box>
      <Accordion>
        {FAQ_LIST.map(faq => (
          <AccordionItem key={faq.id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="semibold">{faq.question}</Text>
              </Box>
            </AccordionButton>
            <AccordionPanel pb="4">{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};
