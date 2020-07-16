import ApiClient from "./client";

const BASE_URL = "/search";

export default {
    list(params) {
        return ApiClient.get(BASE_URL, { params });
    },
};
