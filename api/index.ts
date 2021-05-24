import { apiRequest } from "../Utils/axios";

// this should be added later to .env file
const secretKey = "4f298a53e552283bee957836a529baec";

const API = {
    fetchPopularMovies() { return apiRequest("GET", "/movie/popular", null, { api_key: secretKey, language: "en-US" }) },
    fetchUpcomingMovies() { return apiRequest("GET", "/movie/upcoming", null, { api_key: secretKey, language: "en-US" }) },
    fetchTopRatedMovies() { return apiRequest("GET", "/movie/top_rated", null, { api_key: secretKey, language: "en-US" }) },
    fetchMovie(movie_id: number) { return apiRequest("GET", `/movie/${movie_id}`, null, { api_key: secretKey, language: "en-US" }) }
}

export default API;