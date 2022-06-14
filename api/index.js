import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzZmZmM1OWUzOGM1MGY0M2M0MTRjNTE4OTZhMTYyZSIsInN1YiI6IjVjZmRkNjdiMGUwYTI2N2U1MWM5YmMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kKQGeRfbrYFnqXImc50fnYhKwkJ9rAMOnXN2ouenNPs";

const API_URL = "https://api.themoviedb.org/4";

export const fetchMovies = async (id) => {
  const response = await axios.get(API_URL + `/list/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return response;
};
