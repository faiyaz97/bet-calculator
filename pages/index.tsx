import Layout from "../components/Layout";
import { Box, Container, Text } from "@chakra-ui/react";
import OddsTypeSelector from "@/components/OddsTypeSelector";

export default function Index() {
  return (
    <Layout>
      <Container maxW="720px" bg="brand.800" px={0}>
        <Box>
          <OddsTypeSelector />
        </Box>
      </Container>
    </Layout>
  );
}
