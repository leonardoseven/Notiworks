package br.com.notiworks.dto;

import lombok.Data;

@Data
public class ImageDTO {

	
	public ImageDTO(String url) {
		super();
		this.url = url;
	}

	private String url;
}
