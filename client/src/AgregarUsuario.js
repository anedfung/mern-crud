import React, {useState} from 'react';
import uniqid from  'uniqid';
import axios from 'axios';
import swal from 'sweetalert2';

function AgregarUsuario() {

    //  Hooks
    const[nombre, setNombre]=useState('');
    const[email, setEmail]=useState('');
    const[telefono, setTelefono]=useState('');

    function agregarUsuario(){
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: uniqid()
        }
        console.log(usuario);

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            swal.fire('Felicidades', 'El usuario se creo con exito')
        })
        .then(err => {console.log(err)});
    }

    return(
        <div>
            <h2>Crear un nuevo usuario</h2>
            <label htmlFor='txtNombre'>Nombre:</label>
            <input id="txtNombre" type="text" value={nombre} onChange={(e) => {setNombre(e.target.value)}} ></input>
            <br></br>

            <label htmlFor='txtEmail'>Email:</label>
            <input id="txtEmail" type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} ></input>
            <br></br>

            <label htmlFor='txtTelefono'>Telefono:</label>
            <input id="txtTelefono" type="text" value={telefono} onChange={(e) => {setTelefono(e.target.value)}} ></input>
            <br></br>

            <button onClick={agregarUsuario}>Guardar Usuario</button>
        </div>
    )
};

export default AgregarUsuario;