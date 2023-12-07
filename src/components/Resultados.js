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

            {moviesResults.length === 0 && <h3>No hay resultados</h3>}

            <div className='row'>
                {moviesResults.map((oneMovie, idx) => (
                    <div className='col-3' key={idx}>
                        <div className="card mt-4">
                            {oneMovie.poster_path ? (
                                <>
                                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt={idx} className="card-img-top" />
                                </>
                            ) : (
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b410494-3059-4373-8503-559713817c4c/dfcdt7d-257d1343-4b9b-4064-b5ab-7b0f8bc1a4f4.jpg/v1/fit/w_600,h_750,q_70,strp/cine_camera_vintage_by_abiliofernandez_dfcdt7d-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNDEwNDk0LTMwNTktNDM3My04NTAzLTU1OTcxMzgxN2M0Y1wvZGZjZHQ3ZC0yNTdkMTM0My00YjliLTQwNjQtYjVhYi03YjBmOGJjMWE0ZjQuanBnIiwiaGVpZ2h0IjoiPD03NTAiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzBiNDEwNDk0LTMwNTktNDM3My04NTAzLTU1OTcxMzgxN2M0Y1wvYWJpbGlvZmVybmFuZGV6LTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.J1rpKK7k16swV7uitn5CUEITfZpdES0vE1EJpLUS7gQ" alt="Imagen Genérica" className="card-img-top" />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{oneMovie.title}</h5>
                                <p className="card-text">{oneMovie.overview.substring(0, 98)}</p>
                                <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
