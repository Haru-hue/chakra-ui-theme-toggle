import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const themes = {
  'light': extendTheme({
    config,
    styles: {
      global: {
        body: {
          color: "black",
          bg: "white",
        },
      },
    },
  }),
  'dark': extendTheme({
    config,
    styles: {
      global: {
        body: {
          color: "white",
          bg: "gray.800",
        },
      },
    },
  }),
  'black': extendTheme({
    config,
    styles: {
      global: {
        body: {
          color: "white",
          bg: "black",
        },
      },
    },
  }),
};

export default themes;
