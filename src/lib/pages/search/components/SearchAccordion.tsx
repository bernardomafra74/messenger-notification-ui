import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Code,
  Text,
} from "@chakra-ui/react";

import type { IMessageData } from "lib/types/customer-search";

interface SearchCardsProps {
  messages: IMessageData[];
}

export default function SearchAccordion({ messages }: SearchCardsProps) {
  return (
    <Accordion allowToggle>
      {messages.map((message) => (
        <AccordionItem key={message.id}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {message.id}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Box mt={4}>
              <Text my="5px" color="green" fontWeight="bold">
                {message.status?.toUpperCase()}
              </Text>
              <Text my="5px">variableValues:</Text>
              <Code>{JSON.stringify(message.variableValues)}</Code>
              <Text my="5px">templateId: {message.templateId}</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
