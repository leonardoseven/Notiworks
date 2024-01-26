package br.com.notiworks.dto;

import java.util.List;

import lombok.Data;

@Data
public class HomeListDTO {
	
	private List<DirectoryDTO> listDirectory;
	
	private List<NotasDTO> listNotas;
}
