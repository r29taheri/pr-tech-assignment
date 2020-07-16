import React, { memo } from "react";

import PropTypes from "prop-types";
import { Box, Flex, Text } from "@chakra-ui/core";

import DeleteDialog from "./DeleteDialog";
import Picture from "../../Picture";

const Card = ({ id, image, title, description }) => (
    <Flex
        p={2}
        d="flex"
        bg="white"
        shadow="md"
        pos="relative"
        borderWidth="1px"
        alignItems="center"
    >
        <Picture size="80px" source={image} objectFit="cover" />
        <Box textAlign="left" ml={2} mr="45px">
            <Text fontWeight="bold">{title}</Text>
            <Text color="gray.600" wordBreak="break-all">
                {description}
            </Text>
        </Box>
        <DeleteDialog id={id} />
    </Flex>
);

Card.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default memo(Card);
