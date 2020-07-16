import React, { memo } from "react";

import PropTypes from "prop-types";
import { Box } from "@chakra-ui/core";
import { map, get, isEmpty } from "lodash";

import EmptyContent from "../EmptyContent";
import ItemsLoading from "./Loading";
import Item from "./Item";

const Items = ({ data, isLoading, handleAddItem, ...rest }) => (
    <Box
        w="full"
        {...rest}
        bg="white"
        zIndex="10"
        pos="absolute"
        overflowY="auto"
        borderColor="gray.300"
        borderWidth={{ base: "none", md: "1px" }}
    >
        {isLoading ? (
            <ItemsLoading repeat={3} />
        ) : isEmpty(data) ? (
            <EmptyContent h="160px" />
        ) : (
            map(data, (item) => (
                <Item
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    handleAddItem={handleAddItem}
                    description={item.description}
                    image={get(item, "images.default.filePath")}
                />
            ))
        )}
    </Box>
);

Items.defaultProps = {
    data: [],
};

Items.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    handleAddItem: PropTypes.func.isRequired,
};

export default memo(Items);
