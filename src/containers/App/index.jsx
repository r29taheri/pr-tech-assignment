import React from "react";
import { Box } from "@chakra-ui/core";
import { Helmet } from "react-helmet";

import Routes from "../../components/Routes";

const App = () => {
    return (
        <>
            <Helmet
                titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
                defaultTitle={process.env.REACT_APP_NAME}
            />
            <Box pt="4" bg="gray.50" minHeight="100vh">
                <Routes />
            </Box>
        </>
    );
};

export default App;
