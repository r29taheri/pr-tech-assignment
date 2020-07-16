import React, { memo } from "react";

import PropTypes from "prop-types";
import { Image } from "@chakra-ui/core";

import IMAGES_PRE_URL from "../../constants/IMAGES_PRE_URL";

const Picture = ({ source, ...rest }) => (
    <Image
        {...rest}
        src={`${IMAGES_PRE_URL}/${source}`}
        fallbackSrc={require("../../assets/images/image-not-found.png")}
    />
);

Picture.propTypes = {
    source: PropTypes.string,
};

export default memo(Picture);
