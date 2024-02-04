"use client";

import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";

const TestTest = () => {
  const {
    betStake,
    setBetStake,
    betType,
    setBetType,
    oddsType,
    setOddsType,
    conditionEachWay,
    setConditionEachWay,
    conditionRuleFour,
    setConditionRuleFour,
    conditionDeadHeat,
    setConditionDeadHeat,
  } = useGlobalContext();

  useEffect(() => {});
  return (
    <Flex height="40px" bg="linear-gradient(#206a92 50%, #164863 50%)">
      <Flex>
        <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
          {betType} {oddsType} {betStake} {conditionEachWay} {conditionRuleFour}{" "}
          {conditionDeadHeat}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TestTest;
