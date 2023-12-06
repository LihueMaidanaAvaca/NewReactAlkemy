import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Resultados(){
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([])

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=226e91d53a26153ddaf84f29c7897096&query=${keyword}`;
        axios.get(endPoint).then(response => {
            const moviesArray = response.data.results;
            setMoviesResults(moviesArray)
        })
        .catch(error => console.log(error))
    }, [setMoviesResults]);

    return(
        <>
            <h2>Buscaste: <em>{keyword}</em></h2>
            <div className='row'>
                {moviesResults.map((oneMovie, idx) => {
                    return (
                        <div className='col-3' key={idx}>
                            <div className="card mt-4" >
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt={idx} className="card-img-top"  />
                                <div className="card-body">
                                    <h5 className="card-title">{ oneMovie.title }</h5>
                                    <p className="card-text">{ oneMovie.overview.substring(0, 98) }</p>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}