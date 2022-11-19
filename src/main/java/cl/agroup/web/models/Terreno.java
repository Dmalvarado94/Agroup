package cl.agroup.web.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="terrenos")
public class Terreno {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		@NotNull
		private String nombreTerreno;
		@NotNull
		private String descripcionTerreno;
		
		public Terreno() {
			super();
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNombreTerreno() {
			return nombreTerreno;
		}

		public void setNombreTerreno(String nombreTerreno) {
			this.nombreTerreno = nombreTerreno;
		}

		public String getDescripcionTerreno() {
			return descripcionTerreno;
		}

		public void setDescripcionTerreno(String descripcionTerreno) {
			this.descripcionTerreno = descripcionTerreno;
		}
}
