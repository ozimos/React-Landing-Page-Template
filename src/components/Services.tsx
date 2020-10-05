import React from "react";
import SectionTitle from "./SectionTitle";
import { SimpleGrid, Text, VStack } from "@chakra-ui/core";
import { serviceIcons, zipIcons, IZippedItem } from "../data/icons";
import Section from "./Section";
import ServiceItem from "./ServiceItem";

export type ServiceKeys = keyof typeof serviceIcons;

export type TServiceInfo = {
  [key in ServiceKeys]: string;
};

export type TServiceItems = {
  [key in ServiceKeys]: IZippedItem;
};
export default function Services({ data }) {
  const serviceItems = zipIcons<TServiceItems>(data, serviceIcons);
  return (
    <Section variant="blue-grad" id="services">
      <VStack color="white">
        <SectionTitle variant="gray">Our Services</SectionTitle>
        <Text mb="60px" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </Text>
        <SimpleGrid columns={[1, 2, 3]} spacingX={[2, 10, 20]} spacingY={10}>
          {data
            ? serviceItems.map((entry: IZippedItem) => (
                <ServiceItem
                  key={entry.key}
                  name={entry.item.name}
                  icon={entry.icon}
                  text={entry.item.text}
                />
              ))
            : "loading"}
        </SimpleGrid>
      </VStack>
    </Section>
  );
}
