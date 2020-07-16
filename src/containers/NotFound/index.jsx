import React from "react";
import { Flex, Text } from "@chakra-ui/core";

const NotFoundContainer = () => (
    <Flex
        h="80vh"
        align="center"
        justify="center"
        fontWeight="bold"
        textAlign="center"
        flexDirection="column"
        textTransform="uppercase"
    >
        <Text fontSize={{ base: "4xl", lg: "180px" }}>404</Text>
        <Text fontSize={{ base: "md", lg: "xl" }}>OOPS! Page Not Found</Text>
        <Text>We are sorry, but the page you requested was not found</Text>
    </Flex>
);

export default NotFoundContainer;
