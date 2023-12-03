import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Extend the default theme
const customTheme = extendTheme({
  colors: {
    brand: {
      900: "#1a202c",
      800: "#2d3748",
      // more colors
    },
  },
  // other theme customizations
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
      {/* Other layout components */}
    </ChakraProvider>
  );
}

export default MyApp;
