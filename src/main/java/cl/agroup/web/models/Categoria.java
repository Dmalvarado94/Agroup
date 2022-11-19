package cl.agroup.web.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table (name="categorias")
public class Categoria {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	private String nombreCategoria;
	@NotNull
	private Long valorCaja;
	public Categoria() {
		super();
	}
	public Categoria(Long id, @NotNull String nombreCategoria, @NotNull Long valorCaja) {
		super();
		this.id = id;
		this.nombreCategoria = nombreCategoria;
		this.valorCaja = valorCaja;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombreCategoria() {
		return nombreCategoria;
	}
	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}
	public Long getValorCaja() {
		return valorCaja;
	}
	public void setValorCaja(Long valorCaja) {
		this.valorCaja = valorCaja;
	}
	
}
