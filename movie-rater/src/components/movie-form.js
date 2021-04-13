import React,{useState, useEffect} from 'react';
import API from '../api-service';

function MovieForm(props)
{
    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    useEffect( () => {
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])

    const updateClicked = () => {
        API.updateMovie(props.movie.id, {title: title, description: description})
        .then(resp => props.updateMovie(resp))
        .catch(error => console.log(error))
    }

    const createClicked = () => {
        API.createMovie({title, description})
        .then(resp => props.movieCreate(resp))
        .catch(error => console.log(error))
    }
    return (
        <React.Fragment>
            {props.movie ? (
                <div>
                    <label htmlFor="title">Title</label><br/>
                    <input id="title" type="text" placeholder="title" 
                            value={title}
                            onChange={ evt => setTitle(evt.target.value)}
                    /><br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea id="descripton" type="text" placeholder="Description"
                            value={description}
                            onChange={evt => setDescription(evt.target.value)}
                    /><br/>
                    {props.movie.id ?
                        <button onClick={updateClicked}>Update</button> :
                        <button onClick={createClicked}>Create</button>
                    }
                </div>
            ): null}
        </React.Fragment>
    )
}

export default MovieForm;