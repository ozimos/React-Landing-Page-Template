import React from "react";
import {
  Flex,
  HStack,
  Box,
  Link,
  Icon,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
} from "@chakra-ui/core";
import { RiMenuFill, RiPlaneFill } from "react-icons/ri";
import NavItem from "./NavItem";

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
function Logo() {
  const expanded = useBreakpointValue({
    base: "RLP",
    sm: "React Landing Page",
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
          <Icon as={RiPlaneFill} boxSize={10} /> <Box as={Logo} flexShrink={3} />
        </HStack>
      </Link>
      {expanded ? <ExpandedNav /> : <MenuNav />}
    </Flex>
  );
}
