import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage.js';
import SearchMovies from './pages/SearchMovies.js';
import Movie from './pages/Movie.js';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/movies'}>Search movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
      </Routes>
    </div>
  );
};
