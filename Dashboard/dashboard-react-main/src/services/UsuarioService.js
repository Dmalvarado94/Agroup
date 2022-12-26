import axios from 'axios';

const rutaBase = "http://localhost:8081/api3/"; 

const usuarioId = 1;

const getAllUsuarios = async() => {
    const respuesta = await axios.get(rutaBase + 'listar/usuarios');
    console.log(respuesta.data)
    return respuesta.data;
}

const guardarUsuario = async(usuario) => {
    const respuesta = await axios.post(rutaBase + 'guardar/usuario', usuario);
    return respuesta.data;
}


export { getAllUsuarios, guardarUsuario };