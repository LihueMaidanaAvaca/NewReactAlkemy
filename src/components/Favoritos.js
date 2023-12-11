import { useState, useEffect } from "react"

export default function Favoritos(props) {
    // const [favorites, setFavorites] = useState([])

    // useEffect(() => {
    //     const favsInLocal = localStorage.getItem('favs')

    //     if (favsInLocal !== null) {
    //         const favsArray = JSON.parse(favsInLocal)
    //         console.log(favsArray)
    //         setFavorites(favsArray)
    //     }
    // }, [])

    return (
        <>
            { !props.favorites.length && <div className="col-12 text-danger">No hay favoritos</div>}
            <div className='row'>
                {props.favorites.map((oneMovie, idx) => {
                    return (
                        <div className='col-3' key={idx}>
                            <div className="card mt-4" >
                                <img src={oneMovie.imgURL} alt={idx} className="card-img-top" />
                                <button className="favourite-btn" onClick={props.addOrRemoveFromFavs} data-movie-id={oneMovie.id}>🖤</button>
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0, 98)}</p>
                                    {/* <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link> */}
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