package br.com.notiworks.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.DirectoryDTO;
import br.com.notiworks.dto.DirectoryListDTO;
import br.com.notiworks.services.DirectoryService;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/directory")
public class DirectoryRestController {

	
	@Autowired
	private DirectoryService directoryService;
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody DirectoryDTO dto){
		directoryService.saveDirectory(dto);
		return new ResponseEntity<String>("", HttpStatus.OK);
	}
	
	@GetMapping("/list-all")
	private ResponseEntity<List<DirectoryListDTO>> listAll(){
		List<DirectoryListDTO> listAll = directoryService.listAll();
		return new ResponseEntity<List<DirectoryListDTO>>(listAll, HttpStatus.OK);
	}
	
}
