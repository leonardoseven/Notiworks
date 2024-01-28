package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.ConteudoDTO;
import br.com.notiworks.dto.NotaDTO;
import br.com.notiworks.dto.NotasDTO;
import br.com.notiworks.models.Notas;
import br.com.notiworks.services.NotasService;

@RestController
@RequestMapping("/api/v1/notas")
public class NotasRestController {

	@Autowired
	private NotasService notasService;
	
	@PostMapping("/save")
	public ResponseEntity<Notas> save(@RequestBody NotaDTO notaDTO){
		try {
			Notas saveNotas = notasService.saveNotas(notaDTO);
			return new ResponseEntity<Notas>(saveNotas, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Notas>(new Notas(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/save/{notaId:.+}")
	public ResponseEntity<Notas> save(@PathVariable(value="notaId") String notaId, @RequestBody ConteudoDTO dto){
		try {
			Notas saveConteudoNota = notasService.saveConteudoNota(notaId, dto.getConteudo());
			return new ResponseEntity<Notas>(saveConteudoNota, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Notas>(new Notas(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("{notaId:.+}")
	public ResponseEntity<NotasDTO> load(@PathVariable(value="notaId") String notaId){
		try {
			NotasDTO dto = new NotasDTO();
			Notas n = notasService.findById(notaId);
			dto.setConteudo(n.getConteudo());
			dto.setId(n.getId());
			dto.setNome(n.getTitulo());
			return new ResponseEntity<NotasDTO>(dto, HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<NotasDTO>(new NotasDTO(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
