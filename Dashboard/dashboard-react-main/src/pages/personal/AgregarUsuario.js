import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const usuarioInicial = [
    {
    nombre: "",
    apellido: "",
    edad : '',
    genero: "",
    correo: "",
    descripcion: "",
    password: "",
    telefono: ''
    }
]

function ModalComponent({usuarioAgregar}) {
    // Esto muestra si está abierto o cerrado el estado.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

// Estos son los valores del auto nuevo que crearemos.
    const [usuarioNuevo, setUsuario] = useState(usuarioInicial);
    const {nombre, apellido, correo} = usuarioNuevo;

    const handleSubmit = (e) => {
      e.preventDefault();//Esto es para evitar que la pagina se actualize al presionar el button
      usuarioAgregar(usuarioNuevo);
    }
  
    const handleInputChange = (e) => {
          //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
          setUsuario({...usuarioNuevo, [e.target.name] : e.target.value})//Aqui el event.target.name toma el name de cada input para añadirle datos
      }
      
  
    return (
      <>
        <Button><i class="bi bi-plus-lg" variant="success" onClick={handleShow}> Agregar Trabajador</i></Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Agrega un usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <label>Nombre</label>
              <input type='text' className='form-control' id='nombre' placeholder='Ingrese un Nombre' value={nombre} name='nombre' onChange={handleInputChange}/>
              <br />
          </div>
          <div className='form-group'>
              <label>Apellido</label>
              <input type='text' className='form-control' id='apellido' placeholder='Ingrese un Apellido' value={apellido} name='apellido' onChange={handleInputChange}/>
              <br />
              
          </div>
          <div className='form-group'>
              <label>Correo</label>
              <input type='email' className='form-control' id='correo' placeholder='example@gmail.com' value={correo} name='correo' onChange={handleInputChange}/>
              <br />
              
          </div>
          <br/>
          <button type='submit' className='btn btn-outline-primary me-2'>Agregar</button>
      </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalComponent;
