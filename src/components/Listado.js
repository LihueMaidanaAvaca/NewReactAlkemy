import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

import '../css/bootstrap.min.css'

export default function Listado() {
    let token = localStorage.getItem('token');

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=226e91d53a26153ddaf84f29c7897096';
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMoviesList(apiData.results)
            })
    }, [setMoviesList]);

    console.log(moviesList)

    return (
        <>
            {!token && <Navigate replace to="/" />}
            <div className='row'>
                { }
                {moviesList.map((oneMovie, idx) => {
                    return (
                        <div className='col-3' >
                            <div className="card" >
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
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