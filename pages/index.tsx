import Layout from "../components/Layout";
import { Box, Container, Text } from "@chakra-ui/react";
import OddsTypeSelector from "@/components/OddsTypeSelector";
import BetTypeSelector from "@/components/BetTypeSelector";

export default function Index() {
  return (
    <Layout>
      <Container maxW="720px" bg="brand.800" px={0}>
        <Box borderColor="brand.500" borderWidth="2px" boxShadow="dark-lg">
          <BetTypeSelector />
          <OddsTypeSelector />
        </Box>
      </Container>
    </Layout>
  );
}
