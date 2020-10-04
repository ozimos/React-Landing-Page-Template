import React from "react";
import { Flex, HStack, Icon, Text } from "@chakra-ui/core";

export interface IContactItem {
  name: string;
  contactItem: string;
  icon: any;
}
export default function ContactItem({ icon, name, contactItem }: IContactItem) {
  return (
    <Flex direction="column" mb={4}>
      <HStack mb={2}>
        <Icon as={icon} />
        <Text textTransform="capitalize">{name}</Text>
      </HStack>
      {contactItem}
    </Flex>
  );
}
