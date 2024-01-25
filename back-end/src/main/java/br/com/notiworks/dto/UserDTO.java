package br.com.notiworks.dto;

import lombok.Data;

@Data
public class UserDTO {
	
	public UserDTO() {}
	
	public UserDTO(String erroString) {
		this.erroMsg = erroString;
	}
	
	private String token;
	private Long id;
	private String username;
	private String name;
	private String password;
	private String erroMsg;
	
}
