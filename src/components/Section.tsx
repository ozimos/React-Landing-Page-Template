import React from "react";
import { Box, HeadingProps, useStyleConfig } from "@chakra-ui/core";
import { bg_lighten } from "../themeConstants";

export const SectionTheme = {
  variants: {
    "blue-grad": {
      bg: bg_lighten,
    },
    grey: {
      bgColor: "erl_grey.200",
    },
  },
};

export default function Section({ children, variant, ...rest }: HeadingProps) {
  const styles = useStyleConfig("Section", { variant });
  return (
    <Box py={100} sx={styles} {...rest}>
      <Box px={15} maxW={[960, 540, 720, 960]} w="100%" mx="auto">
        {children}
      </Box>
    </Box>
  );
}
