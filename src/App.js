
import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './Component/MovieList';

import SearchBox from './Component/SearchBox';
import MovieListHeading from './Component/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://omdbapi.com/?s=${searchValue}&apikey=fe2f6c44&s=Terminator`;
	
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	
  return (
    <div>
      <header className='search_nav'>
				<div className='header'>
				<MovieListHeading heading='Movies' />
				</div>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				
			</header>
      <nav >
      <MovieList movies={movies} />
    </nav>
  </div>
    
  );
}

export default App;
