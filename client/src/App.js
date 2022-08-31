// import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN stack</h1>

      <a href="/">Inicio</a><br></br>
      <a href="agregarusuario">Agregar Usuario</a>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuario/>} exact></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
