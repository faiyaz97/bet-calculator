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
        <Text fontSize={{ base: "sm", sm: "xl" }}>{props.children}</Text>
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
      bg="linear-gradient(#206a92 50%, #164863 50%)"
      height="40px"
    >
      <Flex
        width={{ base: "100px", sm: "150px" }}
        align="center"
        justify="center"
      >
        <Text fontSize={{ base: "sm", sm: "xl" }} color="white">
          ODDS TYPE
        </Text>
      </Flex>

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
