import React, { memo } from "react";

import PropTypes from "prop-types";
import { Box, Text, PseudoBox } from "@chakra-ui/core";

import Picture from "../../Picture";

const Item = ({ id, image, title, description, handleAddItem }) => (
    <PseudoBox
        p={2}
        d="flex"
        cursor="pointer"
        alignItems="center"
        onClick={() =>
            handleAddItem({
                id,
                title,
                image,
                description,
            })
        }
        _hover={{ bg: "gray.100" }}
    >
        <Picture size="60px" objectFit="cover" source={image} />
        <Box textAlign="left" mx={2}>
            <Text fontWeight="bold">{title}</Text>
            <Text color="gray.600" wordBreak="break-all">
                {description}
            </Text>
        </Box>
    </PseudoBox>
);

Item.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleAddItem: PropTypes.func.isRequired,
};

export default memo(Item);
