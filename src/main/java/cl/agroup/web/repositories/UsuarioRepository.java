package cl.agroup.web.repositories;




import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import cl.agroup.web.models.Usuario;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	Usuario findByCorreo(String correo);
	Usuario findByApellido(String Apellido);
	
	// obtener lista de autos por ID de un usuario
	//@Query("SELECT a FROM Usuario a WHERE a.usuario.id = ?1")
	//List<Usuario> findAllByUsuario(Long id);
	
}

