import Layout from "../components/Layout";
import { Box, Text } from "@chakra-ui/react";

export default function Index() {
  return (
    <Layout>
      <Box bg="brand.900" color="white" p={4}>
        <Text fontSize="xl">Hello World</Text>
      </Box>
    </Layout>
  );
}
