import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/

export const fetchGame = async (search, genre, page, limit, sort) => {
  let params = {
    search,
    limit: limit,
    page: page,
  };

  if (genre !== "all") {
    params.genre = genre;
  }

  if (sort !== "") {
    params.sort = sort;
  }

  const queries = new URLSearchParams(params);
  const response = await axios.get(`${API_URL}/games?${queries.toString()}`);
  return response.data;
};

/* INSTRUCTION: Create a function to fetch genres from the API */
export const fetchGenres = async () => {
  const response = await axios.get(`${API_URL}/genres`);
  return response.data;
};
