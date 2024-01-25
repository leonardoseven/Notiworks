package br.com.notiworks.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import br.com.notiworks.dto.DirectoryDTO;
import br.com.notiworks.dto.DirectoryListDTO;
import br.com.notiworks.models.Directory;
import br.com.notiworks.repository.IDirectoryRepository;

@Service
public class DirectoryService {

	
	@Autowired
	private IDirectoryRepository directoryRepository;
	
	@Autowired
	private DirectoryXNotasService directoryXNotasService;

	public Directory saveDirectory(DirectoryDTO dto) {
		if(!StringUtils.isEmpty(dto.getNome()) || !StringUtils.isEmpty(dto.getId())) {
			Directory direct = new Directory();
			direct.setNome(dto.getNome());
			direct.setId(dto.getId());
			direct.setDiretorioPaiId(dto.getPaiId());
			LocalDateTime now = LocalDateTime.now();
			direct.setData_atualizacao(now);
			direct.setData_insercao(now);
			return directoryRepository.save(direct);
		}
		return null;
	}
	
	public Directory saveDirectory(Long notaId, String nome, String id, String paiId) {
		Long idL = null;
		Long paiIdL = null;
		if(!StringUtils.isEmpty(id))
			idL = Long.valueOf(id);
		if(!StringUtils.isEmpty(paiId))
			paiIdL = Long.valueOf(paiId);
	     Directory saveDirectory = saveDirectory(new DirectoryDTO(nome,idL ,paiIdL));
	     if(saveDirectory != null) {
	    	 directoryXNotasService.saveDirectoryXNotas(notaId, saveDirectory.getId());
	     }
	     return saveDirectory;
	}

	public DirectoryListDTO listAll() {
		
		return null;
	}
	
}
