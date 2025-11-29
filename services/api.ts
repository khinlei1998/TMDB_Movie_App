// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjY4YWExZDBkNWM1YmVkZTdhMmU1MmE2Mzg4MGMzNCIsIm5iZiI6MTc1NjgyMDYxNy45NjgsInN1YiI6IjY4YjZmNDg5NzExNDBhYjMwOTU0ZWUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lYhfePlOpYHsAXVeVTeHO4M6xo45Pfc_KV5_LAT9988",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));

export const TMDB_CONFIG = {
  API_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.API_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.API_URL}/discover/movie?&sort_by=popularity.desc`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();
};
