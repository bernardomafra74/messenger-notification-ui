import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import type { IMessageData } from "lib/types/customer-search";

interface SearchTableProps {
  messages: IMessageData[];
}

export default function SearchTable({ messages }: SearchTableProps) {
  return (
    <TableContainer>
      <Table variant="small">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>status</Th>
            <Th>variableValues</Th>
            <Th>phone</Th>
            <Th>templateId</Th>
            <Th>createdAt</Th>
            <Th>updatedAt</Th>
          </Tr>
        </Thead>
        <Tbody>
          {messages.map((message) => (
            <Tr key={message.id}>
              <Td>{message.id}</Td>
              <Td>{message.status}</Td>
              <Td>{JSON.stringify(message.variableValues)}</Td>
              <Td>{message.phone}</Td>
              <Td>{message.templateId}</Td>
              <Td>{message.createdAt}</Td>
              <Td>{message.updatedAt}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
