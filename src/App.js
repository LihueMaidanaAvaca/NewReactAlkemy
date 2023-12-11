import { Routes, Route } from 'react-router-dom'

import Login from './components/Login.js'
import Listado from './components/Listado.js';
import Detalle from './components/Detalle.js';
import Resultados from './components/Resultados.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './css/app.css'
import './css/bootstrap.min.css'

export default function App() {
  
  const addOrRemoveFromFavs = e => {
    const favMovies = localStorage.getItem('favs')
  
    let tempMoviesInFavs;
  
    if(favMovies === null){
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
    }
  
    console.log(tempMoviesInFavs)
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const tittle = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, tittle, overview, 
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    })

    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      console.log("Se agrego la pelicula")
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      console.log("ya no es fav")
    }
  }

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path='/detalle' element={<Detalle />} />
          <Route path='/resultados' element={<Resultados />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

