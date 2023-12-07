import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';

export default function Resultados() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=226e91d53a26153ddaf84f29c7897096&query=${keyword}`;
        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results;
                if (moviesArray.length === 0) {
                    const MySwal = withReactContent(Swal);
                    new MySwal(
                        <span>Tu búsqueda no tuvo resultados</span>
                    );
                }
                setMoviesResults(moviesArray);
            })
            .catch(error => console.log(error));
    }, [location.search, keyword]);

    return (
        <>
            <h2>Buscaste: <em>{keyword}</em></h2>
            <div className='row'>
                {moviesResults.map((oneMovie, idx) => (
                    <div className='col-3' key={idx}>
                        <div className="card mt-4">
                            {oneMovie.poster_path ? (
                                <>
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt={idx} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title}</h5>
                                        <p className="card-text">{oneMovie.overview.substring(0, 98)}</p>
                                        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                                    </div>
                                </>
                            ) : (
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0, 98)}</p>
                                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
