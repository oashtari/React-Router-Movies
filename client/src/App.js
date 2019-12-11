import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Link to="/movies/">MovieList</Link>
      {/* <Link to="/movies/">Movies</Link> */}

      <Route exact path="/movies/" render={props => <MovieList {...props} />} />
      <Route path="/movies/:id" render={props => <Movie {...props} id={props.id} />} />
    </div>
  );
};

export default App;
