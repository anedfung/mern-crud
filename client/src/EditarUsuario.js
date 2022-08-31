import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditarUsuario() {
    const params = useParams();
    
    //  Hooks
    const[nombre, setNombre]=useState('');
    const[email, setEmail]=useState('');
    const[telefono, setTelefono]=useState('');

    //  Para volver atras al index
    const navegar = useNavigate();

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario}).then(res => {
            console.log(res.data);

            const datausuario = res.data[0];
            setNombre(datausuario.nombre);
            setEmail(datausuario.email);
            setTelefono(datausuario.telefono);
        })
    }, []);

    //  funcion que actualiza usuario
    function editarUsuario() {
        //  Nuevo objeto para actualizar el usuario
        const actualizarusuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }

        //  Hacer la peticion usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data);
            alert(res.data);
            navegar('/');
        })
        .then(err => {console.log(err)});
    }

    return(
        <div>
            <h2>Editar usuario con ID {params.idusuario}</h2>
            <label htmlFor='txtNombre'>Nombre:</label>
            <input id="txtNombre" type="text" value={nombre} onChange={(e) => {setNombre(e.target.value)}} ></input>
            <br></br>

            <label htmlFor='txtEmail'>Email:</label>
            <input id="txtEmail" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} ></input>
            <br></br>

            <label htmlFor='txtTelefono'>Telefono:</label>
            <input id="txtTelefono" type="text" value={telefono} onChange={(e) => {setTelefono(e.target.value)}} ></input>
            <br></br>

            <button onClick={editarUsuario}>Editar Usuario</button>
        </div>
    )
};

export default EditarUsuario;