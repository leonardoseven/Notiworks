package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.notiworks.configs.utils.JwtUtil;
import br.com.notiworks.dto.AuthenticationRequest;
import br.com.notiworks.dto.TokenDTO;
import br.com.notiworks.services.UserService;

@CrossOrigin(origins = "http://localhost:5173")
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
	
	
	@PostMapping("/token")
	public ResponseEntity<TokenDTO> getToken(@RequestBody AuthenticationRequest request){
		TokenDTO t = new TokenDTO();
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
			final UserDetails user = userService.loadUserByUsername(request.getEmail());
			if(user != null) {
				t.setToken(jwtUtil.generateToken(user));
				t.setMessage("Success!");
				return ResponseEntity.ok(t);
			}
		}catch (Exception e) {
			t.setMessage("User Not Found.");
			return ResponseEntity.status(400).body(t);
		}
		t.setMessage("User Not Found.");
		return ResponseEntity.status(400).body(t);
	}
}
