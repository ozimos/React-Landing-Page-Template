import { Flex, FlexProps, Text } from "@chakra-ui/core";

const Footer = (props: FlexProps) => (
  <Flex as="footer" py="2rem" bgColor="erl_grey.200" justify="center" {...props}>
    <Text color="erl_grey.300">&copy; 2020 Equinox Resources Limited</Text>
  </Flex>
);

export default  Footer