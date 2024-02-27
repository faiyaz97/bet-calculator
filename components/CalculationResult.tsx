import React, { useEffect, useState } from "react";
import { Flex, Text, Card, CardBody } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import * as calculations from "./calculations";

const CalculationResult = () => {
  const { betType, betStake, oddsType, selectionsData } = useGlobalContext();

  // State to store the calculation result
  const [calculationResult, setCalculationResult] = useState({
    potentialWin: 0,
    totalStake: 0,
  });

  useEffect(() => {
    if (calculations[betType]) {
      setCalculationResult(
        calculations[betType](selectionsData, betStake, oddsType)
      );
    } else {
      console.log("Unsupported bet type");
    }
  }, [betType, betStake, oddsType, selectionsData]);

  return (
    <>
      <Flex height="40px" bg="linear-gradient(#206a92 50%, #164863 50%)">
        <Flex
          width={{ base: "100px", sm: "150px" }}
          align="center"
          justify="center"
        >
          <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
            WINNINGS
          </Text>
        </Flex>
      </Flex>
      <Flex color="white">
        <Flex
          flex="1"
          bg="brand.900"
          border="1px solid black"
          borderRadius="md"
          padding="4"
          margin="2"
          direction="column"
          align="center"
        >
          <Text>Total Stake</Text>
          <Text fontSize="3xl">{calculationResult.totalStake}</Text>
        </Flex>
        <Flex
          flex="1"
          bg="brand.900"
          border="1px solid black"
          borderRadius="md"
          padding="4"
          margin="2"
          direction="column"
          align="center"
        >
          <Text>Potential Win</Text>
          <Text fontSize="3xl">{calculationResult.potentialWin}</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default CalculationResult;
