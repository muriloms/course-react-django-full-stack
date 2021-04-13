import React, {useState, useEffect} from 'react';
import './App.css';

import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/movies/",{
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Token e8a1ae2ff30f512b375ef2b32070e1b3430f66dd'
      }
    })
    .then(resp=>resp.json())
    .then(resp=>setMovie(resp))
    .catch(error=>console.log(error))
  }, [])

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

  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie rater</h1>
      </header>
      <div className="layout">
        <div>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
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
