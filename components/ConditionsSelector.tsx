import React from "react";
import { Checkbox, Flex, Text } from "@chakra-ui/react";

const ConditionsSelector = () => {
  return (
    <Flex height="40px" bg="linear-gradient(#206a92 50%, #164863 50%)">
      <Flex
        width={{ base: "100px", sm: "150px" }}
        align="center"
        justify="center"
      >
        <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
          CONDITIONS
        </Text>
      </Flex>

      <Flex bg="brand.600" align="center" justify="space-around" flex="1">
        <Flex>
          <Checkbox colorScheme="green">
            <Text fontSize={{ base: "sm", sm: "xl" }}>Each Way</Text>
          </Checkbox>
        </Flex>
        <Flex>
          <Checkbox colorScheme="green">
            <Text fontSize={{ base: "sm", sm: "xl" }}>Rule 4</Text>
          </Checkbox>
        </Flex>
        <Flex>
          <Checkbox colorScheme="green">
            <Text fontSize={{ base: "sm", sm: "xl" }}>Dead Heat</Text>
          </Checkbox>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ConditionsSelector;
