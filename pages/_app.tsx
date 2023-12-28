import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Extend the default theme
const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#9BBEC8",
      },
    }),
  },
  colors: {
    brand: {
      900: "#164863",
      800: "#427D9D",
      700: "#9BBEC8",
      600: "#a5c7d9",
      500: "#DDF2FD",
      400: "#ececec",
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
