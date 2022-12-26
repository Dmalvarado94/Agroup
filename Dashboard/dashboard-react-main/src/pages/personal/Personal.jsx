import React from 'react'

import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Personal.scss'
import ModalComponent from './AgregarUsuario';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsuarios, guardarUsuario } from '../../services/UsuarioService';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';





const usuarioInicial = [
    {
        id: '',
        nombre: "",
        apellido: "",
        edad: "",
        correo: "",
        genero: ""
    }
];


const Personal = () => {

    

        const [usuarios, setUsuarios] = useState(usuarioInicial);
    
        const obtenerUsuarios = async() => {
            setUsuarios(await getAllUsuarios());
        }

        const usuarioAgregar = async (usuario) => {
          await guardarUsuario(usuario)
          setUsuarios(await getAllUsuarios())
      }
    
        useEffect(
            () => {obtenerUsuarios()}, []
        );


  return (
    <div className="App">
    <div className='app-nav'> <Navbar /> </div>
      <div className='main-container'>
        <aside className='app-side'>
        <Sidebar />
        </aside>
        
            <main className='main'>
            
            <form  className='main-form'>
              <h4>Registre Trabajador</h4>
              <ModalComponent //llamando al modal
                        usuarioAgregar={usuarioAgregar}/>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput" className='label'>Nombre</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Diego Armando"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2"  className='label'>Apellido</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Maradona"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2"  className='label'>Edad</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="25"/>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput2"  className='label'>Correo</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="diego@maradona.com"/>
              </div>
              <br />
              <button className='boton-formulario' type='submit'>Registre</button>
            </form>
            
            
            
            <table className="table  tabla-personal">
              
              <thead className='cabeza-tabla'>
                <tr className='columnas-tabla'>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">edad</th>
                  <th scope="col">correo</th>
                  
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>

  {
            usuarios.map(usuario =>
        <tr key={usuario.id}>
      
      <td>{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.apellido}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.correo}</td>
      <td>{usuario.genero}</td>
      <td className='td-botones '><div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2 boton-actualizar" type="button">Actualizar</button>
  <button class="btn btn-primary boton-eliminar" type="button">Eliminar</button>
</div></td>
    </tr>
    

                
                )
        }



  </tbody>
</table>
            </main>
        
      </div>
    </div>
  )
}


export default Personal;