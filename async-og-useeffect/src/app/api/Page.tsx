import React, { useState, useEffect } from 'react';

import Movies from '@/component/Movies';
import Search from '@/component/Search';

const Page = () => {
  const [search, setSearch] = useState('starwars');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.example.com/movies?search=${search}`);
      const data = await response.json();
      setMovies(data.results.slice(0, 5)); // Begrens resultatet til de første 5 filmene
    };

    fetchMovies();
  }, [search]);

  const handleSearch = () => {
    // Håndter søk og oppdaterer "search" for å trigge useEffect
    // Dette vil laste inn filmer basert på det nye søket
  };

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <Movies movies={movies} />
    </div>
  );
};

export default Page;
