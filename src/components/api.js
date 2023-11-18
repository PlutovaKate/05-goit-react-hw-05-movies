import axios from 'axios';

const searchParams = new URLSearchParams({
  API_KEY: 'e5e20b17de62d5a60669623e09d8690f',
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = () => {
  return axios.get(`/trending/all/week?${searchParams}`);
};

export const getByName = name => {
  return axios.get(`/search/movie?${searchParams}&query=${name}`);
};

export const getDetails = id => {
  return axios.get(`/movie/${id}?${searchParams}`);
};

export const getCast = id => {
  return axios.get(`/movie/${id}/credits?${searchParams}`);
};

export const getReviews = id => {
  return axios.get(`/movie/${id}/reviews?${searchParams}`);
};
