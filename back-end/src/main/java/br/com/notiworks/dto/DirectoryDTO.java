package br.com.notiworks.dto;

import lombok.Data;

@Data
public class DirectoryDTO {

	public DirectoryDTO(String nome, Long id, Long paiId) {
		this.id = id;
		this.nome = nome;
		this.paiId = paiId;
	}
	
	private Long id;
	private Long paiId;
	private String nome;
	private String dtAtualizacao;
	
}
