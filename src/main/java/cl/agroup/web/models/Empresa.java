package cl.agroup.web.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="empresas")
public class Empresa{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto incrementable
	
	private Long Id;
	@NotNull
	private String nombreEmpresa;
	@NotNull
	private String rutEmpresa;
	@NotNull
	private String representante;
	@NotNull
	private String rutRepresentante;
	@NotNull
	private int telefonoRepresentante;
	
	//One to Many para Usuarios
	@JsonIgnore
	@OneToMany(mappedBy = "empresa",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<Usuario> usuarios;

	public Empresa() {
		super();
	}

	public Empresa(Long id, @NotNull String nombreEmpresa, @NotNull String rutEmpresa, @NotNull String representante,
			@NotNull String rutRepresentante, @NotNull int telefonoRepresentante, List<Usuario> usuarios) {
		super();
		Id = id;
		this.nombreEmpresa = nombreEmpresa;
		this.rutEmpresa = rutEmpresa;
		this.representante = representante;
		this.rutRepresentante = rutRepresentante;
		this.telefonoRepresentante = telefonoRepresentante;
		this.usuarios = usuarios;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getNombreEmpresa() {
		return nombreEmpresa;
	}

	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}

	public String getRutEmpresa() {
		return rutEmpresa;
	}

	public void setRutEmpresa(String rutEmpresa) {
		this.rutEmpresa = rutEmpresa;
	}

	public String getRepresentante() {
		return representante;
	}

	public void setRepresentante(String representante) {
		this.representante = representante;
	}

	public String getRutRepresentante() {
		return rutRepresentante;
	}

	public void setRutRepresentante(String rutRepresentante) {
		this.rutRepresentante = rutRepresentante;
	}

	public int getTelefonoRepresentante() {
		return telefonoRepresentante;
	}

	public void setTelefonoRepresentante(int telefonoRepresentante) {
		this.telefonoRepresentante = telefonoRepresentante;
	}

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}
	

}
