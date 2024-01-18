package br.com.notiworks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.notiworks.models.User;
import br.com.notiworks.repository.IUserRepository;
import lombok.RequiredArgsConstructor;

@Service
public class UserService implements UserDetailsService{

	@Autowired
	private IUserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user= userRepository.findByUsername(username);
		if(user == null)
			throw new UsernameNotFoundException("No user found");
		return user;
	}

}
