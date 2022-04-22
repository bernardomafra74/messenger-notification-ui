import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

import SomeImage from "lib/components/samples/SomeImage";

interface SearchFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchForm({ handleSubmit }: SearchFormProps) {
  return (
    <Box
      margin="0 auto"
      maxWidth={800}
      display={{ md: "flex" }}
      alignItems="center"
      minHeight="70vh"
      gap={8}
      mb={8}
      w="full"
    >
      <SomeImage />
      <Box>
        <Heading as="h2" fontSize={{ base: "lg", sm: "3xl" }} mb="20px">
          Buscar mensagens
        </Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <Text color="orange.300" mb="5px" fontWeight={500}>
              Name:
            </Text>
            <Input name="name" placeholder="Digite o nome do cliente" />
          </Box>
          <Box mt="20px">
            <Text color="orange.300" mb="5px" fontWeight={500}>
              Email:
            </Text>
            <Input name="email" placeholder="Digite o email do cliente" />
          </Box>
          <Box mt="20px">
            <Text color="orange.300" mb="5px" fontWeight={500}>
              Phone:
            </Text>
            <Input
              required
              name="phone"
              type="tel"
              placeholder="Digite o telefone do cliente"
            />
          </Box>
          <Button
            type="submit"
            isFullWidth
            bg="orange.300"
            borderRadius="8px"
            mt="20px"
            color="white"
            _hover={{
              opacity: "0.8",
            }}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
