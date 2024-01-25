package br.com.notiworks.services;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import br.com.notiworks.dto.EmailDTO;
import br.com.notiworks.models.User;
import br.com.notiworks.utils.GeneratePin;

@Service
public class RecoveryPasswordService {

	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserService userService;
	
	public String generatePin() {
		return GeneratePin.generate();
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
		User user = userService.findByUsername(email);
		if(user == null) return false;
		return true;
	}
}
