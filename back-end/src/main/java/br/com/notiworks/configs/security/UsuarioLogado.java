package br.com.notiworks.configs.security;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class UsuarioLogado {

	private Long id;
	private String username;
	
}
