package br.com.notiworks.restcontroller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teste")
public class TesteRestController {

	
	@GetMapping
	public ResponseEntity<String> teste(){
		return new ResponseEntity<String>("Ola", HttpStatus.OK);
	}
	
}
