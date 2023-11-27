import { Routes, Route } from 'react-router-dom'

import Login from './components/Login.js'
import Listado from './components/Listado.js';
import Detalle from './components/Detalle.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './css/bootstrap.min.css'

export default function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/listado' element={<Listado />} />
          <Route path='/detalle' element={<Detalle />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

