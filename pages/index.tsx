import Layout from "../components/Layout";
import { Box, Container, Text } from "@chakra-ui/react";
import OddsTypeSelector from "@/components/OddsTypeSelector";
import BetTypeSelector from "@/components/BetTypeSelector";
import ConditionsSelector from "@/components/ConditionsSelector";
import StakeInput from "@/components/StakeInput";
import BetSelections from "@/components/BetSelections";

export default function Index() {
  return (
    <Layout>
      <Container maxW="720px" bg="brand.800" px={0}>
        <Box boxShadow="dark-lg">
          <BetTypeSelector />
          <OddsTypeSelector />
          <ConditionsSelector />
          <StakeInput />
          <BetSelections />
        </Box>
      </Container>
    </Layout>
  );
}
