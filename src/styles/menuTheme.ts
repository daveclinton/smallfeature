import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  list: {
    py: "4",
    borderRadius: "xl",
    border: "none",
    bg: "dark",
  },
  item: {
    bg: "dark",
    color: "gray.200",
    _hover: {
      bg: "teal.600",
    },
    _focus: {
      bg: "teal.600",
    },
  },
  groupTitle: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
  divider: {
    my: "4",
    borderColor: "white",
    borderBottom: "2px dotted",
  },
});
export const menuTheme = defineMultiStyleConfig({ baseStyle });
