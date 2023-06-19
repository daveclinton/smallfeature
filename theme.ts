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
    global: ({ colorMode }: { colorMode: string }) => ({
      body: {
        bg: colorMode === "light" ? colors.light : colors.dark,
        color: colorMode === "light" ? colors.dark : colors.light,
      },
    }),
  },
  components: {},
  textStyles: {
    h1: {
      fontSize: "calc(1.8rem + 3vmin)",
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.4rem",
      lineHeight: 1.3,
      fontWeight: 400,
      textAlign: "center",
    },
    h3: {
      fontSize: "calc(1.1rem + .5vmin)",
      lineHeight: 1.4,
      opacity: 0.8,
      fontWeight: 400,
    },
    p: { fontSize: "1rem", fontWeight: 400 },
  },
});

export default theme;
