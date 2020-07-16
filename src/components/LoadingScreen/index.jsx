import React, { memo } from "react";
import { Flex, Spinner } from "@chakra-ui/core";

const LoadingScreen = () => (
    <Flex
        w="100%"
        alignItems="center"
        h="calc(100vh - 4rem)"
        justifyContent="center"
    >
        <Spinner
            size="xl"
            speed="0.65s"
            thickness="4px"
            color="blue.500"
            emptyColor="gray.200"
        />
    </Flex>
);

export default memo(LoadingScreen);
