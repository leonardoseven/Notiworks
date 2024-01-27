package br.com.notiworks.services;

import java.io.File;
import java.nio.file.Files;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadImagesService{

	
	public byte[]  uploadImage(MultipartFile file) throws Exception {
		String fileReturnName = null;
		try {
			String mineType =file.getContentType();
			String fileName =file.getOriginalFilename();
			String extension = FilenameUtils.getExtension(fileName);
            // Salvar a imagem no sistema de arquivos (substitua "caminho/para/salvar" pelo caminho desejado)
			fileReturnName =UUID.randomUUID()+fileName;
            String caminho = "C:/Users/Leonardo/Pictures/notiworks/" + fileReturnName;
            File f = new File(caminho);
            file.transferTo(new File(caminho));
            byte[] imageBytes = Files.readAllBytes(f.toPath());
            return imageBytes;
		}catch (Exception e) {
			e.printStackTrace();
			throw new Exception(e);
		}
		
		//return "http://localhost/upload/images/get"+fileReturnName;
	}
}
