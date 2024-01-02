import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const BetSelections = () => {
  return (
    <Flex height="40px" bg="linear-gradient(#206a92 50%, #164863 50%)">
      <Flex
        width={{ base: "100px", sm: "150px" }}
        align="center"
        justify="center"
      >
        <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
          STAKE
        </Text>
      </Flex>
    </Flex>
  );
};

export default BetSelections;
