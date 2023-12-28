import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  UseRadioProps,
  useRadio,
  useRadioGroup,
  Text,
} from "@chakra-ui/react";

interface RadioCardProps extends UseRadioProps {
  children: ReactNode;
}

// RadioCard component
const RadioCard: React.FC<RadioCardProps> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" flex="1" height="40px">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        bg="brand.600"
        align="center"
        justify="center"
        height="100%"
        whiteSpace="nowrap"
        borderColor="brand.900"
        borderWidth="1px"
        px={5}
        py={3}
        _checked={{
          bg: "brand.800",
          color: "white",
          boxShadow: "inner",
        }}
        _focus={{
          boxShadow: "lg",
        }}
      >
        <Text fontSize="lg">{props.children}</Text>
      </Flex>
    </Box>
  );
};

// BetTypeSelector component
const BetTypeSelector = () => {
  const options = [
    "Single",
    "Double",
    "Treble",
    "Fourfold",
    "Fivefold",
    "Sixfold",
    "Sevenfold",
    "Eightfold",
    "Accumulator",
    "Trixie",
    "Yankee",
    "Canadian / Super Yankee",
    "Patent",
    "Lucky 15",
    "Lucky 31",
    "Lucky 63",
    "Heinz",
    "Super Heinz",
    "Goliath",
    "Super Heinz with Singles",
    "Super Goliath",
  ];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "betType",
    defaultValue: options[0],
    onChange: (value) => console.log(value), // Replace with your handler
  });

  const group = getRootProps();

  return (
    <Box bg="brand.900" borderColor="brand.900" borderWidth="1px">
      <Flex
        bg="linear-gradient(#206a92 50%, #164863 50%)"
        height="38px"
        align="center"
        justify="center"
      >
        <Text fontSize="xl" mx={10} color="white">
          BET TYPE
        </Text>
      </Flex>
      <Flex {...group} wrap="wrap">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BetTypeSelector;