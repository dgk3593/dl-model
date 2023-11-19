const BASE_URL = import.meta.env.DEV
    ? "http://localhost:3000/dl-model"
    : "https://dgk3593.github.io/dl-model";

/**
 * turn local url to absolute url
 * @param { string } input
 * @returns { Promise<Response> }
 */
export const myFetch = async input =>
    input.startsWith("http") ? fetch(input) : fetch(`${BASE_URL}/${input}`);
