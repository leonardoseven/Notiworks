package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import br.com.notiworks.dto.PinDTO;
import br.com.notiworks.dto.TokenDTO;
import br.com.notiworks.dto.UserDTO;
import br.com.notiworks.models.User;
import br.com.notiworks.services.UserService;
import br.com.notiworks.utils.GeneratePin;

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
	public ResponseEntity<UserDTO> autenticate(@RequestBody AuthenticationRequest request){
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
			final UserDetails user = userService.loadUserByUsername(request.getEmail());
			if(user != null) {
				User u = userService.findByUsername(request.getEmail());
				UserDTO dto = new UserDTO("");
				dto.setName(u.getNome());
				dto.setToken(jwtUtil.generateToken(user));
				dto.setUsername(u.getUsername());
				return ResponseEntity.ok(dto);
			}
		}catch (Exception e) {
			return ResponseEntity.status(400).body(new UserDTO("User not found"));
		}
		return ResponseEntity.status(400).body(new UserDTO("User not found"));
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
	
	@GetMapping("/send/pin")
	public ResponseEntity<PinDTO> sendPin(@RequestParam("email") String email){
		PinDTO pin = new PinDTO();
		String pinCode = GeneratePin.generate();
		String sendEmail = userService.sendEmail(email, pinCode);
		if(sendEmail.equals("Sent")) {
			pin.setEmail(email);
			pin.setPin(pinCode);
			return new ResponseEntity<PinDTO>(pin, HttpStatus.OK);
		
		}else {
			pin.setErroMsg(sendEmail);
			return new ResponseEntity<PinDTO>(pin, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/createUser")
	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDto){
		UserDTO saveUser = userService.saveUser(userDto);
		return new ResponseEntity<UserDTO>(saveUser, HttpStatus.CREATED);
	}
	
}
