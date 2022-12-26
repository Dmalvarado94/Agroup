package cl.agroup.web.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;
import cl.agroup.web.models.Usuario;
import cl.agroup.web.services.UsuarioServicesImpl;


@RequestMapping("/api3")
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UsuarioApiRestController {
	
	@Autowired
	private UsuarioServicesImpl usuarioServicesImpl;
	@RequestMapping(value = "/guardar/usuario", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public String guardarUsuario(@RequestBody Usuario usuario) {
		 /*
		 * {
		 * nombre:"Mijail",
		 * correo:"a@a.cl",
		 * password: "secret"
		 * }
		 * */
		Boolean resultado = usuarioServicesImpl.guardarUsuario(usuario);
		if(resultado) {//si es verdadero
			return "Insertado correctamente"; //enviar a una vista
		}else {
			return "Error al crear usuario";
		}
	}
	
	@RequestMapping("/eliminar/usuario")
	public String eliminarUsuario(@RequestParam(value = "id", required = false) Long id){
		// Aqui llamamos al metodo eliminar en el servicio
		return usuarioServicesImpl.eliminarUsuario(id);
	}
	
	@RequestMapping("/actualizar/usuario")
	public String actualizarUsuario(@RequestBody Usuario usuario) {
		if (usuario.getId()!=null) {
			String mensaje = usuarioServicesImpl.actualizarUsuario(usuario);
			return mensaje;
		}
		return "No se actualizará ningun usuario";
	}
	
	@RequestMapping("/obtener/usuario")
	public Usuario obtenerUsuario(@RequestParam(value="id",required = true) Long id){
		
		return usuarioServicesImpl.obtenerUsuario(id);
				
	}
	
	// AHora vamos a listar a todos los usuarios
	@GetMapping("listar/usuarios")
	public List<Usuario> obtenerListaUsuarios(){
		return usuarioServicesImpl.obtenerListaUsuarios();
	}

}