import React, { memo } from "react";

import PropTypes from "prop-types";
import { map, range } from "lodash";
import { Box, Flex, Skeleton } from "@chakra-ui/core";

const ItemsLoading = ({ repeat }) =>
    map(range(repeat), (number) => (
        <Flex p={2} key={number}>
            <Skeleton size="40px" />
            <Box mx={2} w="full">
                <Skeleton w="60%" mb={2} h="20px" />
                <Skeleton h="20px" />
            </Box>
        </Flex>
    ));

ItemsLoading.defaultProps = {
    repeat: 1,
};

ItemsLoading.propTypes = {
    repeat: PropTypes.number,
};

export default memo(ItemsLoading);
