package br.com.notiworks.dto;

import java.util.List;

import br.com.notiworks.models.Notas;

public class DirectoryListDTO {
	
	private Long directoryId;
	
	private String directoryName;
	
	private List<DirectoryListDTO> listDirectorys;
	
	private List<Notas> listNotas;

}
