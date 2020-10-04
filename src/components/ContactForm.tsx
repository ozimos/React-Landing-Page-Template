import React from "react";
import {
  Button,
  Text,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Box,
  useToast,
} from "@chakra-ui/core";
import { useForm, Controller } from "react-hook-form";

export default function ContactForm() {
  const { handleSubmit, control, errors } = useForm();
  const toast = useToast();
  const onSubmit = async (formData: any) => {
    const response = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      toast({
        title: "Message Sent",
        description:
          "Your message has been successfully sent. We will reply soon",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex direction="column">
      <Text fontSize="lg" pb="40px">
        Please fill out the form below to send us an email and we will get back
        to you as soon as possible.
      </Text>
      <Box
        as="form"
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          "& input,textarea": { color: "black", bgColor: "white" },
        }}
      >
        <input
          type="hidden"
          name="accessKey"
          value={process.env.NEXT_PUBLIC_EMAIL_KEY}
        />
        <Input type="text" name="honeypot" d="none" />
        <Flex wrap="wrap" justify="space-between" mb="20px">
          <FormControl isRequired>
            <Controller
              as={Input}
              control={control}
              defaultValue=""
              flexBasis={["100%", "100%", "100%", "48%"]}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              isRequired
              errorBorderColor="crimson"
              mb="20px"
              rules={{ required: true }}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <Controller
              as={Input}
              control={control}
              defaultValue=""
              flexBasis={["100%", "100%", "100%", "48%"]}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              rules={{ required: true }}
              isRequired
              errorBorderColor="crimson"
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <Controller
            as={Textarea}
            control={control}
            defaultValue=""
            name="message"
            mb="40px"
            id="message"
            rows={4}
            placeholder="Message"
            rules={{ required: true }}
            isRequired
            errorBorderColor="crimson"
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
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
      </Box>
    </Flex>
  );
}
