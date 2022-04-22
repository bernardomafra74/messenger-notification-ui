import { Box, Flex, Text } from "@chakra-ui/react";
import { MdEmail, MdPerson, MdPhone } from "react-icons/md";

import SearchAccordion from "../components/SearchAccordion";
import type { ICustomerData } from "lib/types/customer-search";
import type { GlobalPageProps } from "lib/types/global-page-props";

export interface SearchCustomerProps extends GlobalPageProps {
  customer: ICustomerData;
}

export default function SearchCustomer({ customer }: SearchCustomerProps) {
  return (
    <Box>
      <Flex mb="20px" alignItems="center">
        <MdPerson size={20} color="#fc580a" />
        <Text ml="10px" mr="20px">
          {customer.name}
        </Text>
        <MdEmail size={20} color="#fc580a" />
        <Text ml="10px" mr="20px">
          {customer.email}
        </Text>
        <MdPhone size={20} color="#fc580a" />
        <Text ml="10px" mr="20px">
          {customer.phone}
        </Text>
      </Flex>
      <SearchAccordion messages={customer.messages || []} />
    </Box>
  );
}
