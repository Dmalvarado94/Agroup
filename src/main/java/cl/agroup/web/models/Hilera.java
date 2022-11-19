package cl.agroup.web.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="hileras")
public class Hilera {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String nombreHilera;
	@NotNull
	private String terrenoId;
	@NotNull
	private String categoriaId;
	@NotNull
	private String supervisorId;
	
	public Hilera() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreHilera() {
		return nombreHilera;
	}

	public void setNombreHilera(String nombreHilera) {
		this.nombreHilera = nombreHilera;
	}

	public String getTerrenoId() {
		return terrenoId;
	}

	public void setTerrenoId(String terrenoId) {
		this.terrenoId = terrenoId;
	}

	public String getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(String categoriaId) {
		this.categoriaId = categoriaId;
	}

	public String getSupervisorId() {
		return supervisorId;
	}

	public void setSupervisorId(String supervisorId) {
		this.supervisorId = supervisorId;
	}
}
