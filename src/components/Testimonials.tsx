import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/core";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Testimonials({ data }) {
  return (
    <Section variant="grey">
      <SectionTitle mb="70px">What our clients say</SectionTitle>

      <Flex justify="space-between" wrap="wrap">
        {data
          ? data.map((d, i) => (
              <Flex
                wrap="wrap"
                key={`${d.name}-${i}`}
                p="20px"
                alignItems="start"
                flexBasis={["100%", "50%", "30%"]}
              >
                <Image borderRadius="full" src={d.img} alt="" mb="20px" />
                <Box as="figure" pl="10px">
                  <Text
                    as="blockquote"
                    fontStyle="italic"
                    fontSize="sm"
                    color="erl_grey.300"
                    mb="20px"
                  >
                    {d.text}
                  </Text>
                  <Text as="figcaption" color="erl_grey.500">
                    {" "}
                    - {d.name}{" "}
                  </Text>
                </Box>
              </Flex>
            ))
          : "loading"}
      </Flex>
    </Section>
  );
}
