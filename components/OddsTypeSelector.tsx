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
        borderWidth="2px"
        boxShadow="inner"
        bg="brand.500"
        align="center"
        justify="center"
        height="100%"
        _checked={{
          bg: "brand.800",
          color: "white",
          borderColor: "brand.900",
        }}
        _focus={{
          boxShadow: "lg",
        }}
      >
        <Text fontSize="xl">{props.children}</Text>
      </Flex>
    </Box>
  );
};

// OddsTypeSelector component
const OddsTypeSelector = () => {
  const options = ["Fractional", "Decimal"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "oddsType",
    defaultValue: options[0],
    onChange: (value) => console.log(value), // Replace with your handler
  });

  const group = getRootProps();

  return (
    <Flex
      align="center"
      justify="center"
      bg="brand.900"
      borderWidth="1px"
      borderColor="brand.900"
    >
      <Text fontSize="1xl" as="b" mx={10} color="white">
        ODDS TYPE
      </Text>
      <Flex {...group} flexWrap="wrap" flexGrow={1}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default OddsTypeSelector;
