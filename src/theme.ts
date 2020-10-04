import { theme as chakraTheme, extendTheme } from "@chakra-ui/core";
import { SectionTheme as Section } from "./components/Section";
import { SectionTitleTheme as SectionTitle } from "./components/SectionTitle";
import { bg_darken, bg_lighten } from "./themeConstants";
const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["30em", "48em", "62em", "80em"];
const styles = {
  global: {
    ".bg-lighten": {
      bg: bg_lighten,
    },
    ".bg-darken": {
      bg: bg_darken,
    },
    a: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },
};
const Link = {
  baseStyle: {
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
      color: "inherit"
    },
  },
};
const theme = extendTheme({
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    erl_grey: {
      100: "rgba(255,255,255,.3)",
      200: "#f6f6f6",
      300: "#888",
      400: "rgba(255,255,255,.75)",
      500: "#666",
      600: "rgba(0,0,0,0.2)",
    },
    erl_blue: {
      100: "#5886fd",
    },
  },
  components: { SectionTitle, Section, Link },
  fonts,
  breakpoints,
  styles,
});

export default theme;
