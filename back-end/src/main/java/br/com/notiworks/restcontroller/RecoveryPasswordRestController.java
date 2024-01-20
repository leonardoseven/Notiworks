package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.dto.PinDTO;
import br.com.notiworks.services.RecoveryPasswordService;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("api/v1/recovery/password")
public class RecoveryPasswordRestController {

	@Autowired
	private RecoveryPasswordService recoveryPasswordService;
	
	@GetMapping("/send/pin")
	public ResponseEntity<PinDTO> sendPin(@RequestParam("email") String email){
		boolean isValidUsername = recoveryPasswordService.validUsername(email);
		PinDTO pin = new PinDTO();
		if(isValidUsername) {
			String pinCode = recoveryPasswordService.generatePin();
			String sendEmail = recoveryPasswordService.sendEmail(email, pinCode);
			if(sendEmail.equals("Sent")) {
				pin.setEmail(email);
				pin.setPin(pinCode);
				return new ResponseEntity<PinDTO>(pin, HttpStatus.OK);
			
			}else {
				pin.setErroMsg(sendEmail);
				return new ResponseEntity<PinDTO>(pin, HttpStatus.BAD_REQUEST);
			}
		}
		pin.setErroMsg("Usuário com email: "+email+" não encontrado.");
		return new ResponseEntity<PinDTO>(pin, HttpStatus.BAD_REQUEST);
	}
	
}
