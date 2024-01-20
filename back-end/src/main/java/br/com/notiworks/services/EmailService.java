package br.com.notiworks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import br.com.notiworks.dto.EmailDTO;

@Service
public class EmailService {

	@Value("${spring.mail.username}")
	public static String emailFrom;
	
    @Autowired
    private JavaMailSender emailSender;

    public String sendEmail(EmailDTO emailModel) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailModel.getEmailFrom());
            message.setTo(emailModel.getEmailTo());
            message.setSubject(emailModel.getSubject());
            message.setText(emailModel.getText());
            emailSender.send(message);
            return "Sent";
        }catch (MailException e){
        	e.printStackTrace();
            return "Error: "+e.getMessage();
        }
    }
}

