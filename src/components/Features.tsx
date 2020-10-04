import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VStack, Text, SimpleGrid, Circle } from "@chakra-ui/core";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Features({ data }) {
  return (
    <Section variant="grey">
      <SectionTitle>Features</SectionTitle>
      <SimpleGrid columns={[1,2,3,4]}>
        {data
          ? data.map((d: any, i: number) => (
              <VStack key={`${d.title}-${i}`} alignItems="center" mt="60px">
                <Circle className="bg-lighten" size="100px" mb="20px">
                  <FontAwesomeIcon color="white" icon={d.icon.split(" ")} size="3x" />
                </Circle>
                <Text fontSize="lg" fontWeight="bold">
                  {d.title}
                </Text>
                <Text textAlign="center">{d.text}</Text>
              </VStack>
            ))
          : "Loading..."}
      </SimpleGrid>
    </Section>
  );
}
