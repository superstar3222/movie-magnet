import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const getMoviesData = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.error(err);
        return err;
    }
};
