import "@/styles/globals.css";
import themes from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ChakraProvider theme={themes[theme]}>
      <Component {...pageProps} changeTheme={changeTheme} theme={theme} />
    </ChakraProvider>
  );
}
