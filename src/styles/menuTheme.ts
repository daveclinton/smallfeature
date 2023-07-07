import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys
);
const variants = {
  navbarMenu: {
    button: {
      _focus: {
        border: "none",
      },
      _clicked: {
        border: "none",
      },
      mt: "-5px",
    },
    list: {
      // this will style the MenuList component
      py: "4",
      pl: "25px",
      pr: "30px",
      height: "133px",
      border: "none",
      bg: "#FFFFFF",
      boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      color: "textMuted",
      gap: "25px",
    },
    item: {
      // this will style the MenuItem and MenuItemOption components
      fontWeight: 600,
      fontSize: "18px",
      p: 0,
      lineHeight: "21.6px",
      _hover: {
        bg: "none",
      },
      _focus: {
        bg: "none",
      },
    },
  },
};

const menuTheme = defineMultiStyleConfig({ variants });
export default menuTheme;
