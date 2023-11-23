import { Link } from 'react-router-dom'

import '../css/bootstrap.min.css'
 
export default function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link> 
                    </li>
                    <li>
                        <Link to='/listado'>Listado</Link> 
                    </li>
                    <li>
                        <Link to='/contacto'>Contacto</Link> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}