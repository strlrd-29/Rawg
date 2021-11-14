import { ChakraProvider } from '@chakra-ui/react';

//default layou
import Layout from '../src/layout/Layout';

//theme import
import theme from '../src/theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
