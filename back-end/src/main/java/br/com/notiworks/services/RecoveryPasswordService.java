package br.com.notiworks.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import br.com.notiworks.dto.EmailDTO;

@Service
public class RecoveryPasswordService {

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserService userService;
	
	public String generatePin() {
		Random random = new Random();
	    StringBuilder pinBuilder = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            int digito = random.nextInt(10); // Gera um número aleatório entre 0 e 9
            pinBuilder.append(digito);
        }
        return pinBuilder.toString();
	}

	public String sendEmail(String email, String pin) {
		EmailDTO dto = new EmailDTO();
		dto.setOwnerRef(EmailService.emailFrom);
		dto.setEmailFrom(EmailService.emailFrom);
		dto.setEmailTo(email);
		dto.setSubject("Pin para recuperação de senha.");
		dto.setText("Seu PIN para recuperar a senha: "+pin);
		return emailService.sendEmail(dto);
	}

	public boolean validUsername(String email) {
		UserDetails user = userService.loadUserByUsername(email);
		if(user == null) return false;
		return true;
	}
}
