package br.com.notiworks.dto;

import lombok.Data;

@Data
public class DirectoryDTO {

	public DirectoryDTO(String nome, Long id, Long directoryFatherId) {
		this.id = id;
		this.nome = nome;
		this.directoryFatherId = directoryFatherId;
	}
	
	private Long id;
	private Long directoryFatherId;
	private String nome;
	private String dtAtualizacao;
	
}
