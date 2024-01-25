package br.com.notiworks.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.notiworks.dto.EmailDTO;
import br.com.notiworks.dto.UserDTO;
import br.com.notiworks.models.User;
import br.com.notiworks.repository.IUserRepository;
import br.com.notiworks.utils.GeneratePin;
import lombok.RequiredArgsConstructor;

@Service
public class UserService implements UserDetailsService{

	@Autowired
	private IUserRepository userRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user= userRepository.findByUsername(username);
		if(user == null)
			throw new UsernameNotFoundException("No user found");
		return user;
	}

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	
	public String generatePin() {
		return GeneratePin.generate();
	}
	
	public String sendEmail(String email, String pin) {
		EmailDTO dto = new EmailDTO();
		dto.setOwnerRef(EmailService.emailFrom);
		dto.setEmailFrom(EmailService.emailFrom);
		dto.setEmailTo(email);
		dto.setSubject("NOTIWORKS - Pin para criação do usuário .");
		dto.setText("Seu PIN para criar seu usuário: "+pin);
		return emailService.sendEmail(dto);
	}

	public UserDTO saveUser(UserDTO userDto) {
		User user = new User();
		user.setNome(userDto.getName());
		user.setUsername(userDto.getUsername());
		user.setPassword(userDto.getPassword());
		user.setData_insercao(LocalDateTime.now());
		user.setData_atualizacao(LocalDateTime.now());
		user.setSobrenome("");
		user.setFlpremium(0);
		User save = userRepository.save(user);
		userDto.setId(save.getId());
		userDto.setPassword(null);
		userDto.setToken(null);
		return userDto;
				
		
	}
}
