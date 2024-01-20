package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.EmailDTO;
import br.com.notiworks.services.EmailService;
import jakarta.validation.Valid;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/email")
public class EmailRestController {

	  @Autowired
	  private EmailService emailService;

	
    @PostMapping("/sending")
    public ResponseEntity<String> sendingEmail(@RequestBody @Valid EmailDTO emailDTO){
    	String status = emailService.sendEmail(emailDTO);
        return new ResponseEntity<String>(status, HttpStatus.CREATED);
    }
	
}
