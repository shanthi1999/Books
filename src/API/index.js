
const axios = require("axios");


async function apiCall(
    method,
    path,
    header = {},
    queryParams = {},
    data = {},
    dispatch = {}
) {
    const urlHost = 'http://localhost:9000/api/v1';

    const url = urlHost + path;
    const headers = {
        'Content-Type': 'application/json',
        ...header
    };

    try {
        const response = await axios({
            method,
            url,
            headers,
            params: queryParams,
            data,
        });

      
        return response.data;
    } catch (error) {
        if (error.response) {
        } else if (error.request) {
            console.log("Request made, but no response received:", error.request);
        } else {
            console.log("Error occurred while setting up the request:", error.message);
        }
        throw error; // Rethrow the error to propagate it to the caller of the apiCall function
    }
}

export default apiCall;
