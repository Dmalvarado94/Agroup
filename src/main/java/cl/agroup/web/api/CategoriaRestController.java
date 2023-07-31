package cl.agroup.web.api;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cl.agroup.web.models.Categoria;
import cl.agroup.web.services.CategoriaServiceImpl;




@RequestMapping("/api4")
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class CategoriaRestController {
	@Autowired
	private CategoriaServiceImpl categoriaServiceImpl;
	
	@RequestMapping("/guardar/categoria")
	public Categoria guardarCategoria(@RequestBody Categoria categoria,
			@RequestParam(value="categoriaId", required = false) Long id) {
	return categoriaServiceImpl.guardarCategoria(categoria);
	}
	
	@RequestMapping(value = "/eliminar/categoria", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody String eliminarCategoria(@RequestParam(value="id",required = false) Long id) {
		categoriaServiceImpl.eliminarCategoria(id);	
		return categoriaServiceImpl.eliminarCategoria(id);
	}
	
	@RequestMapping("/actualizar/categoria")
	public String actualizarCategoria(@RequestBody Categoria categoria) {
		if(categoria.getId()!=null) {
			return categoriaServiceImpl.actualizarCategoria(categoria);
		}
		return "No se actualizó la categoria";
	}
	
	@RequestMapping("/obtener/categoria") 
	public Categoria obtenerCategoria(@RequestParam(value = "id", required = true) Long id) {
		return categoriaServiceImpl.obtenerCategoria(id);
	}
	
	@RequestMapping("/listar/categorias") 
	public List<Categoria> listaCategoria(){
		return categoriaServiceImpl.listaCategoria();
	}
}

