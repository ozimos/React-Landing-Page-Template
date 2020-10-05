import React from "react";
import {
  Grid,
} from "@chakra-ui/core";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact({ data }) {
  return (
    <Section variant="blue-grad" color="white" pb={50} id="contact">
      <SectionTitle variant="gray-left">Get In Touch</SectionTitle>
      <Grid
        templateColumns={["1fr", "1fr", "6fr 2fr"]}
        columnGap={80}
        rowGap={20}
      >
       <ContactForm />
        <ContactInfo contactInfo={data} />
      </Grid>
    </Section>
  );
}
