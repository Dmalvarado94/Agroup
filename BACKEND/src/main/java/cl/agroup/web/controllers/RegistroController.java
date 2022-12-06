package cl.agroup.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import cl.agroup.web.models.Usuario;
import cl.agroup.web.services.UsuarioServicesImpl;


@Controller
@RequestMapping("/registro")
//http://localhost:8081/registro/usuario
public class RegistroController {
	@Autowired
	UsuarioServicesImpl usuarioServicesImpl;

	// capturar la url y desplegar jsp (controlador)
	@GetMapping("/usuario")
	public String mostrarFormulario() {
		return "registro.jsp";
	}

	// Aqui capturamos parametros del formulario Nombre
	@PostMapping("/usuario")
	public String guardarFormulario(@RequestParam("nombre") String nombre, @RequestParam("apellido") String apellido,
			@RequestParam("email") String correo, @RequestParam("password") String pass,
			@RequestParam("password2") String pass2, @RequestParam("genero") String genero, @RequestParam("edad") Integer edad,
			@RequestParam("telefono") Integer telefono,
			Model model) {

		if (pass.equals(pass2)) {

			// Instanciamos un objeto Usuario para poder ingresar a la DB
			Usuario usuario = new Usuario();
			usuario.setNombre(nombre);
			usuario.setCorreo(correo);
			usuario.setApellido(apellido);
			usuario.setPassword(pass);
			usuario.setPassword2(pass2);
			usuario.setEdad(edad);
			usuario.setGenero(genero);
			usuario.setTelefono(telefono);

			// Enviamos a la base de datos, no olvides el UsuarioServicesImplem arriba
			
			Boolean resultado = usuarioServicesImpl.guardarUsuario(usuario);
			if(resultado) {//si es verdadero
				model.addAttribute("msgOk", "Registro exitoso");
				return "login.jsp"; //enviar a una vista
			}else {
				model.addAttribute("msgError" ,"Email ya registrado" );
				return "registro.jsp";
			}	
		}else {
			model.addAttribute("msgError" ,"Password distintos" );
			return "registro.jsp";
		}
	}
	
	//desplegar el jsp   http://localhost:8081/registro/login
		@GetMapping("/login")
		public String login() {
			return "login.jsp";
		}
		
		//capturar el email y password
		@PostMapping("/login")
		public String ingresoUsuario(@RequestParam("email") String email,
				@RequestParam("pass") String pass,
				Model model) {
			// Esto lo trajimos despues de crear el metodo e implementarlo.
			Boolean resultadoLogin = usuarioServicesImpl.ingresoUsuario(email, pass);
			
			// Validación en el Controller también.
			if(resultadoLogin) {
				// Lo llevamos a una ruta interna http://localhost:8081/home
				return "redirect:/home";

			}else {
				model.addAttribute("msgError", "Por favor verifica tus datos ingresados");
			}
			return "login.jsp";
		}

}
