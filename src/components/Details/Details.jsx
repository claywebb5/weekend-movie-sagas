import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    const movie = useSelector(store => store.selectedMovie)

    return (
        <>
            <h1>Movie Details</h1>
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt={movie.title}/>
                    <br />
                    <h4>{movie.description}</h4>
                    <button>Go back</button>
                </div>
        
        
        </>
    )
}

export default Details;