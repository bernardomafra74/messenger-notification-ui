import { Box, Button, Flex, Link } from "@chakra-ui/react";

const CTASection = () => {
  return (
    <Box textAlign={{ base: "center", md: "center" }} marginTop={8}>
      <Flex
        marginY={4}
        justifyContent={{ base: "center", md: "center" }}
        gridGap={2}
      >
        <Button
          as={Link}
          aria-label="Buscar Registros"
          rel="noopener noreferrer"
          href="/search/customer"
          bg="orange.300"
          color="white"
          _hover={{
            textDecoration: "none",
            opacity: "0.8",
          }}
        >
          Buscar Registros
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
