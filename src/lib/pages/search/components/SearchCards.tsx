import { Box, Code, Heading, Text } from "@chakra-ui/react";

import type { IMessageData } from "lib/types/customer-search";

interface SearchCardsProps {
  messages: IMessageData[];
}

export default function SearchCards({ messages }: SearchCardsProps) {
  return (
    <>
      {messages.map((message) => (
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="md">{message.id}</Heading>
          <Box mt={4}>
            <Text my="5px" color="green" fontWeight="bold">
              {message.status?.toUpperCase()}
            </Text>
            <Text my="5px">variableValues:</Text>
            <Code>{JSON.stringify(message.variableValues)}</Code>
            <Text my="5px">templateId: {message.templateId}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
}
