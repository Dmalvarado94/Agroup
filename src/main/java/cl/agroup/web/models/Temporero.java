package cl.agroup.web.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "temporeros")
public class Temporero {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	private String nombre;

	@NotNull
	private String apellido;

	@NotNull
	private Integer edad;

	@NotNull
	private String genero;

	@NotNull
	private String correo;

	@NotNull
	private String password;

	@Transient
	private String password2;

	private String descripcion;

	private Long telefono;

	@NotNull
	private Integer idEmpresa;
	
	@Column(updatable = false) // 
	@DateTimeFormat(pattern= "yyyy-MM-dd")
	private Date createdAt;
	
	@DateTimeFormat(pattern= "yyyy-MM-dd") 
	private Date updatedAt;

	public Temporero() {
		super();
	}

	public Temporero(Long id, @NotNull String nombre, @NotNull String apellido, @NotNull Integer edad,
			@NotNull String genero, @NotNull String correo, @NotNull String password, String password2,
			String descripcion, Long telefono, @NotNull Integer idEmpresa, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.genero = genero;
		this.correo = correo;
		this.password = password;
		this.password2 = password2;
		this.descripcion = descripcion;
		this.telefono = telefono;
		this.idEmpresa = idEmpresa;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Integer getEdad() {
		return edad;
	}

	public void setEdad(Integer edad) {
		this.edad = edad;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword2() {
		return password2;
	}

	public void setPassword2(String password2) {
		this.password2 = password2;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Long getTelefono() {
		return telefono;
	}

	public void setTelefono(Long telefono) {
		this.telefono = telefono;
	}

	public Integer getIdEmpresa() {
		return idEmpresa;
	}

	public void setIdEmpresaFk(Integer idEmpresa) {
		this.idEmpresa = idEmpresa;
	}

	@PrePersist 
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
}
