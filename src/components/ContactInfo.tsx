import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import {contactIcons,  zipIcons, IZippedItem} from "../data/icons"
import ContactItem from "./ContactItem";

export type ContactKeys = keyof typeof contactIcons;

export type TContactInfo = {
  [key in ContactKeys]: string;
};

export type TContactItems = {
  [key in ContactKeys]: IZippedItem;
};

export default function ContactInfo({
  contactInfo,
}: {
  contactInfo: TContactInfo;
}) {
  const contactItems = zipIcons<TContactItems>(contactInfo, contactIcons);
  return (
    <Flex direction="column" pl={14}>
        <Text fontSize="xl" mb="40px">Contact Info</Text>
      {contactItems.map((entry: IZippedItem) => (
        <ContactItem
          key={entry.key}
          name={entry.key}
          icon={entry.icon}
          contactItem={entry.item}
        />
      ))}
    </Flex>
  );
}
