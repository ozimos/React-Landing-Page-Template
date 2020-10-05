import React from "react";
import { RiCheckLine } from "react-icons/ri";
import {
  Box,
  Grid,
  AspectRatio,
  Image,
  VStack,
  Text,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function About({ data }) {
  return (
    <Section id="about">
      <Grid gridTemplateColumns={["1fr", "repeat(2, 1fr)"]} gridGap={10}>
        <AspectRatio ratio={1} maxH="400px" gridRow={["1/2", "1/2", "1/3"]}>
          <Image
            src="img/about.jpg"
            alt="Equinox Resources Building"
            objectFit="cover"
          />
        </AspectRatio>
        <VStack alignItems="start" spacing="1px">
          <SectionTitle variant="left">About Us</SectionTitle>
          <Text mt="20px">{data.paragraph || "loading..."}</Text>
        </VStack>
        <VStack
          alignItems="start"
          spacing="1px"
          gridColumn={["1/2", "1/3", "2/3"]}
        >
          <Text mb="20px" fontSize="xl" fontWeight="bold">
            Why Choose Us?
          </Text>
          <List
            d="grid"
            gridColumnGap={["10px", "20px", "10px"]}
            gridTemplateColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
            gridTemplateRows={["repeat(8, 1fr)", "repeat(4, 1fr)"]}
            gridAutoRows="10px"
            gridAutoFlow="column"
            whiteSpace="nowrap"
          >
            {data.Why.map((d, i) => (
              <ListItem key={`${d}-${i}`}>
                <ListIcon as={RiCheckLine} color="blue.500" />
                {d}
              </ListItem>
            )) || "loading"}
          </List>
        </VStack>
      </Grid>
    </Section>
  );
}
