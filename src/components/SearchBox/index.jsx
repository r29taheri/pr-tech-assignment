import React, { memo, useState, useEffect, useCallback } from "react";

import {
    Box,
    Input,
    Button,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import { size, isEmpty } from "lodash";
import { useDispatch } from "react-redux";

import { AddedTournament } from "../../store/tournament";
import useDebounce from "../../hooks/useDebounce";
import Items from "../Items";

const SearchBox = ({ data, isLoading, handleSearch }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const debouncedSearchTerm = useDebounce(value, 500);

    const handleAddItem = useCallback(
        (item) => {
            dispatch(AddedTournament(item));
            setValue("");
        },
        [dispatch]
    );

    useEffect(() => {
        if (!isEmpty(debouncedSearchTerm) && size(debouncedSearchTerm) > 1) {
            handleSearch(debouncedSearchTerm);
        }
    }, [handleSearch, debouncedSearchTerm]);

    return (
        <Box
            p={30}
            bg="white"
            rounded="lg"
            maxWidth="xl"
            textAlign="center"
            borderColor="gray.300"
            width={{ base: "full", sm: "lg" }}
            borderWidth={{ base: "none", md: "1px" }}
        >
            <Box pos="relative">
                <InputGroup>
                    <Input
                        h="40px"
                        value={value}
                        placeholder="Search Tournament..."
                        onChange={(e) => setValue(e.target.value)}
                    />
                    {!isEmpty(value) && (
                        <InputRightElement width="4.5rem">
                            <Button
                                size="sm"
                                h="1.75rem"
                                onClick={() => setValue("")}
                            >
                                Clear
                            </Button>
                        </InputRightElement>
                    )}
                </InputGroup>
                {size(value) > 1 && size(debouncedSearchTerm) > 1 && (
                    <Items
                        top="40px"
                        data={data}
                        maxH="300px"
                        isLoading={isLoading}
                        handleAddItem={handleAddItem}
                    />
                )}
            </Box>
        </Box>
    );
};

SearchBox.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default memo(SearchBox);
