import React, {useState, useEffect} from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

import {useCookies} from 'react-cookie';

import {useFetch} from './hooks/useFetch';

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [editedMovie, setEditedMovie] = useState('');

  const [token, setToken, deleteToken] = useCookies(['mr-token']);

  const [data, loading, error] = useFetch();


  useEffect(()=>{
    setMovie(data);
  }, [data])

  useEffect(() => {
    if(!token['mr-token']) window.location.href = '/';
  }, [token])

  const loadMovie = movie =>{
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie => {
    setEditedMovie(movie);
    setSelectedMovie(null);
  }

  const updateMovie = movie =>{
    const newMoviews = movies.map (mov => {
      if(mov.id == movie.id)
      {
        return movie;
      }
      return mov;
    })
    setMovie(newMoviews);
  }

  const newMovie = () => {
    setEditedMovie({title: '', description: ''});
    setSelectedMovie(null);
  }

  const movieCreate = movie => {
    const newMovies = [...movies, movie];
    setMovie(newMovie); 
  }

  const removeClicked = movie => {
    const newMoviews = movies.filter(mov => mov.id !== movie.id)
    setMovie(newMoviews);
  }

  const logoutUser = () =>{
    deleteToken(['mr-token']);
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading movies</h1>

  return (
    <div className="App">
      <header className="App-header">
       <h1>
         <FontAwesomeIcon icon={faFilm}></FontAwesomeIcon>
         <span>Movie rater</span>
        </h1>
        <FontAwesomeIcon icon={faSignInAlt} onClick={logoutUser}></FontAwesomeIcon>
      </header>
      <div className="layout">
        <div>
          <MovieList 
            movie={movies} 
            movieClicked={loadMovie} 
            editClicked={editClicked}
            removeClicked={removeClicked}  
          />
          <button onClick={newMovie}>New movie</button>
        </div>
        
         <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
         {editedMovie ? <MovieForm movie={editedMovie} updateMovie={updateMovie} movieCreate={movieCreate}/> 
         : null}
         
       </div>
    </div>
  );
}

export default App;
