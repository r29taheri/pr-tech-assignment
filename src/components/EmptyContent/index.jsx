import React, { memo } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { Box, Text, Flex } from "@chakra-ui/core";

const EmptyContent = ({ ...rest }) => (
    <Flex
        p={4}
        {...rest}
        color="gray.400"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
    >
        <Box as={FiMessageSquare} size="10" mb={4} />
        <Text fontSize={18}>No Result</Text>
    </Flex>
);

export default memo(EmptyContent);
