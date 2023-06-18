import { extendTheme } from "@chakra-ui/react";
export const colors = {
  dark: "#171923",
  light: "#fff",
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
