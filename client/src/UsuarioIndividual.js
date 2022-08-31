import axios from 'axios';
import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import aos from 'aos';
import 'aos/dist/aos.css';

function UsuarioIndividual({usuario}) {
    const navegar = useNavigate();

    //  Para animacion de scroll al bajar
    useEffect(() => {
        aos.init();
    }, [])

    //  funcion para borrar usuario
    function borrarusuario(idusuario) {
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data);
            alert(res.data);
            navegar(0);
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <div data-aos="zoom-out">
            <ul>
                <li>{usuario.idusuario}</li>
                <li>{usuario.nombre}</li>
                <li>{usuario.email}</li>
                <li>{usuario.telefono}</li>
            </ul>

            <Link to={`/editarUsuario/${usuario.idusuario}`}>
                <button>Editar</button>
            </Link>
            <button onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
           
            <hr></hr>
        </div>
    )
};

export default UsuarioIndividual;