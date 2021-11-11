import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#151515",
        color: "#FFFFFF",
      },
    },
  },
  colors: {
    cardbg: "#202020",
    green: {
      ...baseTheme.colors.green,
      g: "#6dc849",
    },
    orange: {
      ...baseTheme.colors.orange,
      o: "#6dc849",
    },
  },
});

export default theme;
