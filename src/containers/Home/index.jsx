import React, { useState, useEffect, useCallback } from "react";

import { get, head, isEmpty } from "lodash";
import { Flex, useToast } from "@chakra-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { ReceivedTournaments } from "../../store/tournament";
import useIsMounted from "../../hooks/useIsMounted";
import SearchBox from "../../components/SearchBox";
import { searchApi } from "../../services/api";
import Cards from "../../components/Cards";
import {
    setStorageTournaments,
    getStorageTournaments,
} from "../../utils/storage";

const RESULT_LIMITED = 10;

const HomeContainer = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const isMounted = useIsMounted();
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const tournaments = useSelector((state) => state);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isEmpty(getStorageTournaments())) {
            dispatch(ReceivedTournaments(getStorageTournaments()));
        }
    }, [dispatch]);

    useEffect(() => {
        setStorageTournaments(tournaments);
    }, [tournaments]);

    const fetchData = useCallback(() => {
        if (!isEmpty(value)) {
            setIsLoading(true);

            searchApi
                .list({
                    q: value,
                    index: "tournament",
                    limit: RESULT_LIMITED,
                })
                .then((res) => {
                    if (isMounted.current) {
                        setData(get(head(get(res, "data")), "documents"));
                    }
                })
                .catch((err) =>
                    toast({
                        title: "An error occurred.",
                        description: get(
                            err,
                            "message",
                            "Something went wrong."
                        ),
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    })
                )
                .finally(() => isMounted.current && setIsLoading(false));
        }
    }, [toast, value, isMounted]);

    useEffect(() => {
        setData([]);
        fetchData();
    }, [fetchData]);

    return (
        <Flex flexDir="column" alignItems="center" justifyContent="center">
            <SearchBox
                data={data}
                isLoading={isLoading}
                handleSearch={setValue}
            />
            <Cards />
        </Flex>
    );
};

export default HomeContainer;
