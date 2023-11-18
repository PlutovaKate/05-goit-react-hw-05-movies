import axios from 'axios';

// const API_KEY = 'e5e20b17de62d5a60669623e09d8690f';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDE1YmRkMmYzMzE3ZTU1ZWZhNGI4MDRiMjM5ODIxNCIsInN1YiI6IjY1MmQ2NzAxMDI0ZWM4MDEzYzU4ZjA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JgGJlVdaUoUJ0oty7awv62yWcrI5JHku-ci7ur8caIk';
axios.defaults.baseURL = 'https://developer.themoviedb.org/3';

const trending = '/trending/all/day';
const searchMovie = '/search/movie';
const movieDetails = '/movie/';
const movieCredits = '/movie/';
const movieReviews = '/movie/';

const params = {
  language: 'en-US',
};

export async function getTrendingMovies(signal) {
  const response = await axios.get(trending, { params, signal });
  return response.data.results;
}

export async function getMovieByQuery(query, signal) {
  const params = {
    query: query,
    include_adult: false,
    language: 'en-US',
  };

  const response = await axios.get(searchMovie, { params, signal });
  return response.data.results;
}

export async function getMovieById(id, signal) {
  const response = await axios.get(movieDetails + id, { params, signal });
  return response.data;
}

export async function getMovieCast(id, signal) {
  const response = await axios.get(movieCredits + id + movieCredits, {
    params,
    signal,
  });
  return response.data.cast;
}

export async function movieReviews(id, signal) {
  const response = await axios.get(movieDetails + id + movieReviews, {
    params,
    signal,
  });
  return response.data;
}
