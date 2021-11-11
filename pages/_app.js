import { ChakraProvider } from "@chakra-ui/react";

//theme import
import theme from "../src/theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
