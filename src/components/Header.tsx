import React from "react";
import { VStack, Box, Heading, Text, Link, Button } from "@chakra-ui/core";
import { bg_darken } from "../themeConstants";

export default function Header({ data }) {
  return (
    <Box
      color="white"
      h="100vh"
      textAlign="center"
      id="header"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      bgImage="url('/img/intro-bg.jpg')"
    >
      <VStack bg="erl_grey.600" h="100%">
        <Heading
          color="inherit"
          textTransform="uppercase"
          fontSize="6xl"
          fontWeight={700}
          pt="200px"
          mb="10px"
        >
          {data.title || "Loading"}
        </Heading>
        <Text fontSize="2xl" mb="60px">
          {data.paragraph || "Loading"}
        </Text>
        <Link
          as={Button}
          bg={bg_darken}
          p="30px"
          size="xl"
          fontSize="md"
          borderRadius="40px"
          href="#features"
          textTransform="uppercase"
          _hover={{
            color: "erl_blue.100",
          }}
        >
          Learn More
        </Link>
      </VStack>
    </Box>
  );
}
