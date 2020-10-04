import React from "react";
import { VStack, Icon, Text, Circle } from "@chakra-ui/core";

export interface IServiceItem {
  name: string;
  text: string;
  icon: any;
}
export default function ServiceItem({ icon, name, text }: IServiceItem) {
  return (
    <VStack mb={2}>
      <Circle className="bg-lighten" size="120px">
        <Icon as={icon} boxSize={10} />
      </Circle>
      <Text fontSize="xl">{name}</Text>
      <Text textAlign="center">{text}</Text>
    </VStack>
  );
}
