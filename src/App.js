import Login from './components/Login.js'
import Listado from './components/Listado.js';
import { Routes, Route } from 'react-router-dom'
 
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/listado' element={<Listado/>} />
      </Routes>
    </>
  );
}

