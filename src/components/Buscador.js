import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

export default function Buscador(){
    const MySwal = withReactContent(Swal)

    const history = useNavigate()

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if (keyword.length === 0) {
            new MySwal(
                <span>Tienes que escribir una palabra clave</span>
            )
        } else if (keyword.length < 3) {
            new MySwal(
                <span>Tienes que escribir al menos 3 caracteres</span>
            )
        } else {
            e.currentTarget.keyword.value = "";
            history(`/resultados?keyword=${keyword}`)
        }
    }

    return(
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-2">
                <input className="form-control" type="text" name="keyword"></input>
            </label>
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
    )
}