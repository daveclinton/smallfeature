import { extendTheme } from "@chakra-ui/react";
export const colors = {
  dark: "#171923",
  light: "#fff",
  classicYellow: "#fcba28",
  classicGreen: "#16d1aa",
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {},
  },
});

export default theme;
