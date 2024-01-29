package br.com.notiworks.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.ContatosDTO;
import br.com.notiworks.models.Contatos;
import br.com.notiworks.services.ContatosService;

@RestController
@RequestMapping("/api/v1/contatos")
public class ContatosRestController {

	@Autowired
	private ContatosService contatosService;
	
	
	@PostMapping("/save")
	public ResponseEntity<ContatosDTO> save(@RequestBody ContatosDTO dto){
		ContatosDTO saveContato = contatosService.saveContato(dto);
		if(!StringUtils.isEmpty(saveContato.getErroMsg())) 
			return new ResponseEntity<ContatosDTO>(saveContato, HttpStatus.BAD_REQUEST);
		return new ResponseEntity<ContatosDTO>(saveContato, HttpStatus.OK);
	}
	
	
	@GetMapping("/list")
	public ResponseEntity<List<Contatos>> listByUser(){
		List<Contatos> list = contatosService.listByUser();
		return new ResponseEntity<List<Contatos>>(list, HttpStatus.OK);
	}
}
