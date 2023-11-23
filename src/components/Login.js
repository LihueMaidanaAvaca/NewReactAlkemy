import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate, Navigate } from 'react-router-dom';

import '../css/bootstrap.min.css'

export default function Login() {

    const history = useNavigate()

    console.log(history)

    const MySwal = withReactContent(Swal)

    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^\S+@\S+\.\S+$/;

        console.log(regexEmail.test(email))

        if (email === "" || password === "") {
            new MySwal(
                <span>Los campos no pueden estar vacios</span>
            )
            return
        }

        if (email !== "" && !regexEmail.test(email)) {
            new MySwal(
                <span>Debes escribir una direccion de correo valida</span>
            )
            return
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            new MySwal(
                <span>Credenciales invalidas</span>
            )
            return
        }

        console.log("Ok estamos listos para enviar la informacion");
        axios
            .post("http://challenge-react.alkemy.org", { email, password })
            .then(res => {
                new MySwal(<span>Perfecto, ingresaste perfectamente</span>)
                const token = res.data.token;
                localStorage.setItem("token", token);
                history('/listado')
            })
    }

    let token = localStorage.getItem('token')

    return (
        <>
            {token && <Navigate replace to="/listado" />}
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="mb-4">Formulario de Login</h2>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Ingresar</button>
                    </form>
                </div>
            </div>
        </>
    )
}