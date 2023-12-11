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
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    console.log(imgURL)
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

