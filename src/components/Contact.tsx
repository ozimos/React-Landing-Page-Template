import React from "react";
import {
  Button,
  Text,
  Grid,
  Flex,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/core";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import ContactInfo from "./ContactInfo";

export default function Contact({ data }) {
  return (
    <Section variant="blue-grad" color="white" pb={50}>
      <SectionTitle variant="gray-left">Get In Touch</SectionTitle>
      <Grid
        templateColumns={["1fr", "1fr", "6fr 2fr"]}
        columnGap={80}
        rowGap={20}
      >
        <Flex direction="column">
          <Text fontSize="lg" pb="40px">
            Please fill out the form below to send us an email and we will get
            back to you as soon as possible.
          </Text>
          <FormControl id="contactForm">
            <Flex wrap="wrap" justify="space-between" mb="20px">
              <Input
                bgColor="white"
                flexBasis={["100%", "100%", "100%", "48%"]}
                type="text"
                id="name"
                placeholder="Name"
                required
                mb="20px"
              />

              <Input
                flexBasis={["100%", "100%", "100%", "48%"]}
                bgColor="white"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </Flex>

            <Textarea
              bgColor="white"
              name="message"
              mb="40px"
              id="message"
              rows={4}
              placeholder="Message"
              required
            />
            <Button
              type="submit"
              variant="outline"
              borderRadius="40px"
              size="lg"
              textTransform="uppercase"
              fontSize="md"
              _hover={{
                color: "erl_blue.100",
                bgColor: "white",
              }}
            >
              Send Message
            </Button>
          </FormControl>
        </Flex>
        <ContactInfo contactInfo={data} />
      </Grid>
    </Section>
  );
}
