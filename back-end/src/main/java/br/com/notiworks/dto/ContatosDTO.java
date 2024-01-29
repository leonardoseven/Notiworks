package br.com.notiworks.dto;

import lombok.Data;

@Data
public class ContatosDTO {

	private Long id;
	
	private String email;
	
	private String nome;
	
	private String erroMsg;
	
}
