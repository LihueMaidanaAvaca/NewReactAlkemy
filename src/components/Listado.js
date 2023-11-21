import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

export default function Listado(){
    const  history = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token === null){
            history('/')
        }
    },[])

    return (
        <h2>Soy el componente listado</h2>
    )
}