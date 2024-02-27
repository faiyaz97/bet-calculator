import React, { useState } from "react";
import {
  Flex,
  Text,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  Input,
  Select,
  IconButton,
} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const BetSelections = () => {
  const {
    selectionsData,
    setSelectionsData,
    betStake,
    betType,
    oddsType,
    conditionEachWay,
    conditionRuleFour,
    conditionDeadHeat,
  } = useGlobalContext();

  const addSelection = () => {
    const newSelection = {
      oddsNumerator: 2,
      oddsDenominator: 1,
      oddsDecimal: 2.0,
      betResult: "Win",
      ewType: conditionEachWay ? "1/4" : "", // Default value for each way
      ruleFourValue: conditionRuleFour ? 0 : null, // Default value for rule 4
      dhType: conditionDeadHeat ? "2 horses" : "", // Default value for dead heat
    };
    console.log(selectionsData);
    setSelectionsData([...selectionsData, newSelection]);
  };

  const removeSelection = (index) => {
    const updatedSelections = selectionsData.filter((_, i) => i !== index);
    setSelectionsData(updatedSelections);
  };

  const handleSelectionChange = (value, index, field) => {
    const updatedSelections = [...selectionsData];
    updatedSelections[index][field] = value;
    setSelectionsData(updatedSelections);
  };

  const renderOddsInput = (numerator, denominator, decimal, index) => {
    return (
      <Flex align="center">
        {oddsType === "Fractional" ? (
          <>
            <Input
              type="number"
              value={numerator}
              onChange={(e) =>
                handleSelectionChange(e.target.value, index, "oddsNumerator")
              }
              mr="2"
              size="xs"
              minW="40px"
              maxW="40px"
            />
            <span>/</span>
            <Input
              type="number"
              value={denominator}
              onChange={(e) =>
                handleSelectionChange(e.target.value, index, "oddsDenominator")
              }
              ml="2"
              size="xs"
              minW="40px"
              maxW="40px"
            />
          </>
        ) : (
          <>
            <Input
              type="number"
              value={decimal}
              onChange={(e) =>
                handleSelectionChange(e.target.value, index, "oddsDecimal")
              }
              ml="2"
              size="xs"
              minW="40px"
              maxW="40px"
            />
          </>
        )}
      </Flex>
    );
  };
  return (
    <Flex direction="column">
      <Flex height="40px" bg="linear-gradient(#206a92 50%, #164863 50%)">
        <Flex
          width={{ base: "100px", sm: "150px" }}
          align="center"
          justify="center"
        >
          <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
            BET SELECTIONS
          </Text>
        </Flex>
      </Flex>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th paddingX="1">#</Th>
            <Th paddingX="1">Odds</Th>
            <Th paddingX="1">Result</Th>
            {conditionEachWay && <Th paddingX="1">EW</Th>}
            {conditionRuleFour && <Th paddingX="1">R4</Th>}
            {conditionDeadHeat && <Th paddingX="1">DH</Th>}
            <Th paddingX="1"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {selectionsData.map((selection, index) => (
            <Tr key={index}>
              <Td paddingX="1" w="20px">
                {index + 1}
              </Td>
              <Td paddingX="1">
                {renderOddsInput(
                  selection.oddsNumerator,
                  selection.oddsDenominator,
                  selection.oddsDecimal,
                  index
                )}
              </Td>
              <Td paddingX="1">
                <Select
                  value={selection.betResult}
                  onChange={(e) =>
                    handleSelectionChange(e.target.value, index, "betResult")
                  }
                  size="xs"
                  maxW="90px"
                  minW="70px"
                >
                  <option value="Win">Win</option>
                  <option value="Lose">Lose</option>
                  <option value="Place">Place</option>
                  <option value="Void/NR">Void/NR</option>
                </Select>
              </Td>
              {conditionEachWay && (
                <Td paddingX="1">
                  <Select
                    value={selection.ewType}
                    onChange={(e) =>
                      handleSelectionChange(e.target.value, index, "ewType")
                    }
                    size="xs"
                    maxW="60px"
                  >
                    <option value="1/2">1/2</option>
                    <option value="1/3">1/3</option>
                    <option value="1/4">1/4</option>
                    <option value="1/5">1/5</option>
                  </Select>
                </Td>
              )}
              {conditionRuleFour && (
                <Td paddingX="1">
                  <Input
                    type="number"
                    value={selection.ruleFourValue}
                    onChange={(e) =>
                      handleSelectionChange(
                        e.target.value,
                        index,
                        "ruleFourValue"
                      )
                    }
                    size="xs"
                    minW="33px"
                    maxW="33px"
                  />
                </Td>
              )}
              {conditionDeadHeat && (
                <Td paddingX="1">
                  <Select
                    value={selection.dhType}
                    onChange={(e) =>
                      handleSelectionChange(e.target.value, index, "dhType")
                    }
                    size="xs"
                    maxW="90px"
                  >
                    <option value="2 horses">2 horses</option>
                    <option value="3 horses">3 horses</option>
                    <option value="4 horses">4 horses</option>
                  </Select>
                </Td>
              )}
              {selectionsData.length != 1 && (
                <Td paddingX="1">
                  <IconButton
                    aria-label="Remove selection"
                    icon={<CloseIcon />}
                    onClick={() => removeSelection(index)}
                    size="xs"
                  />
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <IconButton
        aria-label="Add selection"
        icon={<AddIcon />}
        onClick={addSelection}
      />
    </Flex>
  );
};

export default BetSelections;
