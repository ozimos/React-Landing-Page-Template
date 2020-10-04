import React from "react";
import { Link, Icon, Flex, Circle, Divider } from "@chakra-ui/core";
import Section from "./Section";
import { socialIcons, zipIcons, IZippedItem } from "../data/icons";
export type SocialKeys = keyof typeof socialIcons;

export type TSocialInfo = {
  [key in SocialKeys]: string;
};

export type TSocialItems = {
  [key in SocialKeys]: IZippedItem;
};

export default function Social({ data }) {
  const socialItems = zipIcons<TSocialItems>(data, socialIcons);
  return (
    <Section variant="blue-grad" pt={10} pb={20}>
      <Divider mb="3rem" borderColor="erl_grey.400" borderWidth="1px" />
      <Flex justifyContent="center">
        {data
          ? socialItems.map((entry: IZippedItem) => (
              <Link
                isExternal
                key={entry.key}
                href={entry.item}
                mx="20px"
              >
                <Circle
                  size="50px"
                  border="2px solid white"
                  color="white"
                  bg="inherit.100"
                  _hover={{
                    color: "erl_blue.100",
                    bgColor: "white",
                  }}
                >
                  <Icon
                    borderRadius="full"
                    as={entry.icon}
                    boxSize="1.3rem"
                    focusable
                  />
                </Circle>
              </Link>
            ))
          : "loading"}
      </Flex>
    </Section>
  );
}
