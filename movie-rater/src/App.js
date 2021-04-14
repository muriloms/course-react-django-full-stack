import React, {useState, useEffect} from 'react';
import './App.css';

import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

import {useCookies} from 'react-cookie';

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [editedMovie, setEditedMovie] = useState('');

  const [token] = useCookies(['mr-token']);


  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token['mr-token']}`
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setMovie(resp))
    .catch(error=>console.log(error))
  }, [])

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

  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList 
            movies={movies} 
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
