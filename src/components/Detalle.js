import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Detalle () {
    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    const [ movie, setMovie ] = useState(null)

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=226e91d53a26153ddaf84f29c7897096`;
        axios.get(endPoint)
        .then(response => {
            const movieData = response.data;
            setMovie(movieData)
        })
        .catch(error => {
            console.log(error)
        })
    }, [movieID])

    return (
        <>
            { !token && <Navigate replace to="/"/> }
            { !movie && <p>cargando...</p>}
            { movie &&
            <>
            <h2>Titulo: {movie.title}</h2>
            <div className='row'>
                <div className='col-4'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.id} className="img-fluid"  />
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno: {movie.release_date}</h5>
                    <h5>Reseña:</h5>
                    <p>{movie.overview}</p>
                </div>
            </div>
            </>
            }
        </>
    )
}