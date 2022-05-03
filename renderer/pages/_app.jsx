import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "../theme/style.css";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} style="border-radius: 25px">
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
