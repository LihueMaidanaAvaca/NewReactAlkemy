import { useEffect } from 'react';
import { Navigate } from 'react-router-dom'

export default function Detalle () {
    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(() => {
        console.log(movieID)
    }, [])

    return (
        <>
            { !token && <Navigate replace to="/"/> }
            <h2>Detalle de la pelicula</h2>
            <div className='row'/>
                <div className='col-4'>
                    imagen
                </div>
                <div className='col-8'>
                    <h5>Titulo:</h5>
                    <h5>Titulo:</h5>
                </div>
        </>
    )
}