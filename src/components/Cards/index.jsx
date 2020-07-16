import React, { memo } from "react";

import { map } from "lodash";
import { useSelector } from "react-redux";
import { Box, SimpleGrid } from "@chakra-ui/core";

import Card from "./Card";

const Cards = () => {
    const tournaments = useSelector((state) => state);

    return (
        <Box w="full" overflowY="auto" borderColor="gray.300">
            <SimpleGrid
                spacing={10}
                p={{ base: 2, lg: 10 }}
                columns={{ base: 1, lg: 3 }}
            >
                {map(tournaments, (item) => (
                    <Card
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default memo(Cards);
