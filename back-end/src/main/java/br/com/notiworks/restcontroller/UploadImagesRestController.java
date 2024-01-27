package br.com.notiworks.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.notiworks.services.UploadImagesService;

@RestController
@RequestMapping("/upload/images")
public class UploadImagesRestController {

	
	@Autowired
	private UploadImagesService uploadImagesService; 
	
	@PostMapping
	public ResponseEntity<byte[]> uploadImages(@RequestPart("image") MultipartFile file) throws Exception {
		return new ResponseEntity<byte[]>(uploadImagesService.uploadImage(file), HttpStatus.OK);
	}
}
