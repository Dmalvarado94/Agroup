package cl.agroup.web.services;

import java.util.List;

import cl.agroup.web.models.Usuario;

public interface UsuarioService {
	
	// Aquí definimos métodos
	
	public Boolean guardarUsuario(Usuario usuario);
	public String eliminarUsuario(Long id);
	public String actualizarUsuario(Usuario usuario);
	public Usuario obtenerUsuario(Long id);	
	public List<Usuario> obtenerListaUsuarios();
	
	// Login
	
	public Boolean ingresoUsuario(String email, String password);


}
