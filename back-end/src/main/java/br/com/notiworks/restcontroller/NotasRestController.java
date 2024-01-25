package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authorization.AuthenticatedAuthorizationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.NotaDTO;
import br.com.notiworks.services.NotasService;

@RestController
@RequestMapping("/api/v1/notas")
public class NotasRestController {

	@Autowired
	private NotasService notasService;
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody NotaDTO notaDTO){
		try {
			notasService.saveNotas(notaDTO);
			return new ResponseEntity<String>("", HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
