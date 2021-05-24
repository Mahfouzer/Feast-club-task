import { AxiosPromise } from "axios";
import { apiRequest } from "../Utils/axios";

interface APITYPE {
    fetchMovies: () => AxiosPromise<any>
}

const API: APITYPE = {
    fetchMovies() { return apiRequest("GET", "/movie/76341", null, { api_key: "4f298a53e552283bee957836a529baec" }) },
}

export default API;
