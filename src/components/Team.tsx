import React from "react";
import {VStack, Text, Image, SimpleGrid } from "@chakra-ui/core";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Team({ data }) {
  return (
    <Section id="team">
      <VStack >
        <SectionTitle>Meet the Team</SectionTitle>
        <Text  fontSize="xl" color="erl_grey.300" w="60%" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </Text>
        <SimpleGrid columns={[1, 2, 4]} spacing="20px" pt="70px">
          {data
            ? data.map((d) => (
                <VStack key={d.name} >
                    <Image src={d.img} alt={d.name} boxSize="240px" objectFit="cover" />
                  
                  <Text fontWeight="medium" fontSize="lg">{d.name}</Text>
                  <Text fontSize="md" color="erl_grey.300">{d.job}</Text>
                </VStack>
              ))
            : "loading"}
        </SimpleGrid>
      </VStack>
    </Section>
  );
}
