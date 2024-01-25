package br.com.notiworks.dto;

import java.util.List;

import br.com.notiworks.models.Notas;
import lombok.Data;

@Data
public class DirectoryListDTO {
	
	private Long directoryId;
	
	private String directoryName;
	
	private String dtAtualizacao;
	
	private List<DirectoryListDTO> listDirectorys;
	
	private List<Notas> listNotas;

}
