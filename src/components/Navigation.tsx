import React from "react";
import {
  Flex,
  HStack,
  Box,
  Link,
  createIcon,
  Icon,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
} from "@chakra-ui/core";
import { RiMenuFill } from "react-icons/ri";
import NavItem from "./NavItem";

export const ERLIcon = createIcon({
  displayName: "ERLIcon",
  viewBox: "0 0 80 81",
  path: (
    <path
      fill="currentColor"
      d="M1 41v39h40v-5c0-4.6.2-5 2.3-5 8.1 0 18.9-7.6 23.4-16.4 3.6-6.8 3.8-17.8.5-24.6-4.4-9-15.1-17-22.9-17C41 12 41 12 41 7V2H1v39zm39 .1v29.1l-3.7-.6C11.8 65.2 3 35.9 21.2 19.5c4.8-4.3 11.4-7.3 16.6-7.4L40 12v29.1zM79.5 41c0 21.2.1 29.8.2 19.3.2-10.6.2-28 0-38.5-.1-10.6-.2-2-.2 19.2z"
    />
  ),
});

function ExpandedNav() {
  return (
    <Flex color="erl_grey.500" justify="space-between">
      <NavItem href="#features">Features</NavItem>

      <NavItem href="#about">About</NavItem>

      <NavItem href="#services">Services</NavItem>

      <NavItem href="#testimonials">Testimonials</NavItem>

      <NavItem href="#team">Team</NavItem>

      <NavItem href="#contact">Contact</NavItem>
    </Flex>
  );
}

function MenuNav() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Navigate to Page Sections"
        icon={<Icon as={RiMenuFill} />}
      >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem as={NavItem} href="#features">
          Features
        </MenuItem>

        <MenuItem as={NavItem} href="#about">
          About
        </MenuItem>

        <MenuItem as={NavItem} href="#services">
          Services
        </MenuItem>

        <MenuItem as={NavItem} href="#testimonials">
          Testimonials
        </MenuItem>

        <MenuItem as={NavItem} href="#team">
          Team
        </MenuItem>

        <MenuItem as={NavItem} href="#contact">
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
function ERLLogo() {
  const expanded = useBreakpointValue({
    base: "ERL",
    sm: "Equinox Resources Limited",
  });
  return (
    <Text textTransform="uppercase" fontWeight="bold" isTruncated>
      {expanded}
    </Text>
  );
}
export default function Navigation() {
  const expanded = useBreakpointValue({ lg: true, base: false });
  return (
    <Flex
      as="nav"
      justify="space-between"
      p="15px"
      alignItems="center"
      pos="sticky"
      top={0}
      bgColor="white"
      zIndex={2}
    >
      <Link href="#header">
        <HStack>
          <ERLIcon boxSize={10} /> <Box as={ERLLogo} flexShrink={3} />
        </HStack>
      </Link>
      {expanded ? <ExpandedNav /> : <MenuNav />}
    </Flex>
  );
}
