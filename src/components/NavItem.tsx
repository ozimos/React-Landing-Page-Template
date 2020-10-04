import React from "react";
import { Link, Text, LinkProps } from "@chakra-ui/core";
import { bg_lighten } from "../themeConstants";

export default function NavItem({ children, href, ...rest }: LinkProps) {
  return (
    <Link
      href={href}
      sx={{
        "&:hover>p::after": {
          width: "100%",
        },
      }}
      {...rest}
    >
      <Text
        fontSize="md"
        textTransform="uppercase"
        mx={["10px", "20px"]}
        pos="relative"
        _after={{
          content: '""',
          h: "2px",
          w: 0,
          pos: "absolute",
          bottom: 0,
          left: 0,
          bg: bg_lighten,
          transition: "width 0.2s",
        }}
      >
        {children}
      </Text>
    </Link>
  );
}
