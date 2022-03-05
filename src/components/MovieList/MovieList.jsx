import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleClick(movie) {
        console.log('The movie is:', movie);
        dispatch({
            type: 'SELECTED_MOVIE',
            payload: movie
        })
        dispatch({ type: 'FETCH_GENRES', payload: movie.id });
        history.push('/details');
        
        
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            <br />
                            <button onClick={() => handleClick(movie)}>Details</button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;