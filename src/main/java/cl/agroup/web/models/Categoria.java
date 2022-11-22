package cl.agroup.web.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	//ManyToOne de Categoria proveniente de Hileras
		@JsonIgnore
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="hilera_id")
		private Hilera hilera;

		public Categoria() {
			super();
		}

		public Categoria(Long id, @NotNull String nombreCategoria, @NotNull Long valorCaja, Hilera hilera) {
			super();
			this.id = id;
			this.nombreCategoria = nombreCategoria;
			this.valorCaja = valorCaja;
			this.hilera = hilera;
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

		public Hilera getHilera() {
			return hilera;
		}

		public void setHilera(Hilera hilera) {
			this.hilera = hilera;
		}
	

}
