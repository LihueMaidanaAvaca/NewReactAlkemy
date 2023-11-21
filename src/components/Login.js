import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const history = useNavigate()

    console.log(history)

    const MySwal = withReactContent(Swal)
        
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const regexEmail = /^\S+@\S+\.\S+$/;
        
        console.log(regexEmail.test(email))
        
        if(email === "" || password === ""){
            new MySwal(
                <span>Los campos no pueden estar vacios</span>
            )
            return
        }

        if(email !== "" && !regexEmail.test(email)){
            new MySwal(
                <span>Debes escribir una direccion de correo valida</span>
            )
            return
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            new MySwal(
                <span>Credenciales invalidas</span>
            )
            return
        }

        console.log("Ok estamos listos para enviar la informacion");
        axios
            .post("http://challenge-react.alkemy.org", {email, password})
            .then(res => {
                new MySwal(<span>Perfecto, ingresaste perfectamente</span>)
                const token = res.data.token;
                localStorage.setItem("token", token);
                history('/listado')
            })
    }
    return (
        <>
        <h2>Formulario de Login</h2>
        <form onSubmit={submitHandler}>
            <label>
                <span>Correo Electronico:</span><br/>
                <input type="email" name="email"></input>
            </label>
            <br/>
            <label>
                <span>Contraseña:</span><br/>
                <input type="password" name="password"></input>
            </label>
            <br/>
            <button type="submit">Ingresar</button>
        </form>
        </>
    )
}