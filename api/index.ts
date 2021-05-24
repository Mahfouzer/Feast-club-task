import { apiRequest } from "../Utils/axios";

// this should be added later to .env file
const secretKey = "4f298a53e552283bee957836a529baec";

const API = {
    fetchPopularMovies() { return apiRequest("GET", "/discover/movie", null, { api_key: secretKey, language: "en-US", sort_by: "revenue.asc" }) },
    fetchUpcomingMovies() { return apiRequest("GET", "/discover/movie", null, { api_key: secretKey, language: "en-US", sort_by: "release_date.dec" }) },
    fetchTopRatedMovies() { return apiRequest("GET", "/discover/movie", null, { api_key: secretKey, language: "en-US", sort_by: "vote_average.asc" }) },

}

export default API;