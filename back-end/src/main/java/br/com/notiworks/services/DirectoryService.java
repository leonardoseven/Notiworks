package br.com.notiworks.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import br.com.notiworks.dao.DirectoryDAO;
import br.com.notiworks.dto.DirectoryDTO;
import br.com.notiworks.dto.HomeListDTO;
import br.com.notiworks.dto.NotasDTO;
import br.com.notiworks.models.Directory;
import br.com.notiworks.repository.IDirectoryRepository;

@Service
public class DirectoryService {

	
	@Autowired
	private IDirectoryRepository directoryRepository;
	
	@Autowired
	private DirectoryDAO directoryDAO;
	
	@Autowired
	private DirectoryXNotasService directoryXNotasService;
	
	@Autowired
	private NotasService notasService;

	public Directory saveDirectory(DirectoryDTO dto) {
		if(!StringUtils.isEmpty(dto.getNome()) || !StringUtils.isEmpty(dto.getId())) {
			Directory direct = new Directory();
			if(dto.getId() != null) {
				Optional<Directory> directory = directoryRepository.findById(dto.getId());
				if(directory != null)
					direct.setNome(directory.get().getNome());
				else
					direct.setNome(dto.getNome());
			}else
				direct.setNome(dto.getNome());
		
			direct.setId(dto.getId());
			direct.setDiretorioPaiId(dto.getDirectoryFatherId());
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

	public HomeListDTO listAll() {
		List<DirectoryDTO> listDirectory = directoryDAO.findByUserIdWherePaiIdIsNull();
		List<NotasDTO> listNotas = notasService.findNotasByUserWithOutDirectory();
		HomeListDTO dto = new HomeListDTO();
		dto.setListDirectory(listDirectory);
		dto.setListNotas(listNotas);
		return dto;
		
	}

	public HomeListDTO listByFatherId(Long directoryFatherId) {
		List<DirectoryDTO> listDirectory = directoryDAO.findByUserIdByPaiId(directoryFatherId);
		List<NotasDTO> listNotas = notasService.findNotasByUserWithDirectory(directoryFatherId);
		HomeListDTO dto = new HomeListDTO();
		dto.setListDirectory(listDirectory);
		dto.setListNotas(listNotas);
		return dto;
	}
	
}
