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
    betStake,
    betType,
    oddsType,
    conditionEachWay,
    conditionRuleFour,
    conditionDeadHeat,
  } = useGlobalContext();

  // Maintain selections as part of the component state
  const [selections, setSelections] = useState([
    { id: 1, selectionNumber: 1, odds: 2.0, result: "Win" },
  ]);

  const addSelection = () => {
    const newSelections = [
      ...selections,
      {
        id: selections.length + 1,
        selectionNumber: selections.length + 1,
        odds: 2.0, // Default value, you can change this as needed
        result: "Win", // Default value, you can change this as needed
      },
    ];
    setSelections(newSelections);
  };

  const removeSelection = (id) => {
    const newSelections = selections.filter((selection) => selection.id !== id);
    setSelections(newSelections);
  };

  const renderOddsInput = (oddsType, defaultValue) => {
    if (oddsType === "Fractional") {
      return (
        <Flex align="center">
          <Input
            type="number"
            defaultValue={1}
            mr="2"
            size="xs"
            minW="40px"
            maxW="40px"
          />
          <span>/</span>
          <Input
            type="number"
            defaultValue={1}
            ml="2"
            size="xs"
            minW="40px"
            maxW="40px"
          />
        </Flex>
      );
    } else {
      return (
        <Input
          type="number"
          step="0.01"
          placeholder="e.g., 2.50"
          defaultValue={defaultValue}
          size="xs"
        />
      );
    }
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
            <Th paddingX="1">EW</Th>
            <Th paddingX="1">R4</Th>
            <Th paddingX="1">DH</Th>
            <Th paddingX="1"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {selections.map((selection) => (
            <Tr key={selection.id}>
              <Td paddingX="1" w="20px">
                {selection.selectionNumber}
              </Td>
              <Td paddingX="1">{renderOddsInput(oddsType, selection.odds)}</Td>
              <Td paddingX="1">
                <Select
                  defaultValue="option1"
                  size="xs"
                  maxW="90px"
                  minW="70px"
                >
                  <option value="option1">Win</option>
                  <option value="option2">Lose</option>
                  <option value="option3">Place</option>
                  <option value="option4">Void/NR</option>
                </Select>
              </Td>
              <Td paddingX="1">
                <Select defaultValue="option3" size="xs" maxW="60px">
                  <option value="option1">1/2</option>
                  <option value="option2">1/3</option>
                  <option value="option3">1/4</option>
                  <option value="option3">1/5</option>
                </Select>
              </Td>
              <Td paddingX="1">
                {conditionRuleFour && (
                  <Input
                    type="number"
                    defaultValue={0}
                    size="xs"
                    minW="33px"
                    maxW="33px"
                  />
                )}
              </Td>
              <Td paddingX="1">
                {conditionDeadHeat && (
                  <Select defaultValue="option1" size="xs" maxW="90px">
                    <option value="option1">2 horses</option>
                    <option value="option2">3 horses</option>
                    <option value="option3">4 horses</option>
                  </Select>
                )}
              </Td>
              <Td paddingX="1">
                <IconButton
                  aria-label="Remove selection"
                  icon={<CloseIcon />}
                  onClick={() => removeSelection(selection.id)}
                  size="xs"
                />
              </Td>
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
