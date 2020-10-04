import React from "react";
import {
  VStack,
  Box,
  Heading,
  HeadingProps,
  StackProps,
  useMultiStyleConfig,
} from "@chakra-ui/core";
import { bg_darken } from "../themeConstants";

export const SectionTitleTheme = {
  parts: ["vstack", "box"],
  baseStyle: {
    box: { background: bg_darken },
    vstack: { alignItems: "center" },
  },
  variants: {
    gray: {
      box: { background: "erl_grey.100" },
    },
    "gray-left": {
      box: { background: "erl_grey.100" },
      vstack: { alignItems: "start" },
    },
    left: {
      vstack: { alignItems: "start" },
    },
  },
};

export default function SectionTitle({
  children,
  variant,
  ...rest
}: StackProps & HeadingProps) {
  const styles = useMultiStyleConfig("SectionTitle", { variant });
  return (
    <VStack mb="8px" spacing="8px" sx={styles.vstack} {...rest}>
      <Heading color="inherit" textTransform="uppercase">{children}</Heading>

      <Box d="inline-block" height="4px" w="60px" sx={styles.box}></Box>
    </VStack>
  );
}
