import React from "react";
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";

const StakeInput = () => {
  const { betStake, setBetStake } = useGlobalContext();

  const handleStakeChange = (value: string) => {
    const parsedValue = parseFloat(value);
    const updatedStake = isNaN(parsedValue) ? 0 : parsedValue;
    setBetStake(updatedStake);
  };

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

      <Flex bg="brand.600" flex="1">
        <NumberInput
          width="100%"
          step={0.5}
          defaultValue={betStake}
          precision={2}
          borderColor="transparent"
          onChange={(valueString) => handleStakeChange(valueString)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper
              bg="brand.800"
              _active={{ bg: "brand.900" }}
              color="white"
              borderColor="transparent"
            />
            <NumberDecrementStepper
              bg="brand.800"
              _active={{ bg: "brand.900" }}
              color="white"
              borderColor="transparent"
            />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
    </Flex>
  );
};

export default StakeInput;
