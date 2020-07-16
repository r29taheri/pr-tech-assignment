import { configureStore } from "@reduxjs/toolkit";

import reducer from "./tournament";

export default function () {
    return configureStore({
        reducer,
    });
}
