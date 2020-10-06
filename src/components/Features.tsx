import React from "react";
import { VStack, Text, SimpleGrid, Circle, Icon } from "@chakra-ui/core";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { featureIcons, zipIcons, IZippedItem } from "../data/icons";
export type FeatureKeys = keyof typeof featureIcons;

export type TFeatureInfo = {
  [key in FeatureKeys]: string;
};

export type TFeatureItems = {
  [key in FeatureKeys]: IZippedItem;
};

export default function Features({ data }) {
  const featureItems = zipIcons<TFeatureItems>(data, featureIcons);
  return (
    <Section variant="grey" id="features">
      <SectionTitle>Features</SectionTitle>
      <SimpleGrid columns={[1,2,3,4]}>
        {data
          ? featureItems.map((entry: IZippedItem) => (
              <VStack key={entry.key} alignItems="center" mt="60px">
                <Circle className="bg-lighten" size="100px" mb="20px">
                  <Icon color="white" as={entry.icon} boxSize="3rem" />
                </Circle>
                <Text fontSize="lg" fontWeight="bold">
                  {entry.item.title}
                </Text>
                <Text textAlign="center">{entry.item.text}</Text>
              </VStack>
            ))
          : "Loading..."}
      </SimpleGrid>
    </Section>
  );
}
