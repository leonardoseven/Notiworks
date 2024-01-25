package br.com.notiworks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.notiworks.models.DirectoryXNotas;
import br.com.notiworks.repository.IDirectoryXNotasRepository;

@Service
public class DirectoryXNotasService {

	@Autowired
	private IDirectoryXNotasRepository iDirectoryXNotasRepository;

	public void saveDirectoryXNotas(Long notaId, Long directoryid) {
		DirectoryXNotas dxn = new DirectoryXNotas();
		dxn.setIdDirectory(directoryid);
		dxn.setIdNota(notaId);
		iDirectoryXNotasRepository.save(dxn);
	}
	
	
	
	
}
