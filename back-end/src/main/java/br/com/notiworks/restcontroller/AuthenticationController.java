package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.configs.utils.JwtUtil;
import br.com.notiworks.dto.AuthenticationRequest;
import br.com.notiworks.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

	@Autowired
	private  AuthenticationManager authenticationManager;
	
	@Autowired
	private  UserService userService;
	
	@Autowired
	private  JwtUtil jwtUtil;
	
	@PostMapping("/authenticate")
	public ResponseEntity<String> autenticate(@RequestBody AuthenticationRequest request){
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
			final UserDetails user = userService.loadUserByUsername(request.getEmail());
			if(user != null) 
				return ResponseEntity.ok(jwtUtil.generateToken(user));
		}catch (Exception e) {
			return ResponseEntity.status(400).body("User not found");
		}
		return ResponseEntity.status(400).body("User not found");
		
		
	}
	
	
	@GetMapping("/teste")
	public ResponseEntity<String> teste(){
		return new ResponseEntity<String>("Ola", HttpStatus.OK);
	}
}
