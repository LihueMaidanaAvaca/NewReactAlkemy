import { Routes, Route } from 'react-router-dom'

import Login from './components/Login.js'
import Listado from './components/Listado.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './css/bootstrap.min.css'
 
export default function App() {
  return (
    <div className='container mt-3'>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/listado' element={<Listado/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

