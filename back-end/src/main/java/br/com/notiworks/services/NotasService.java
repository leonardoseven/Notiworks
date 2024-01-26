package br.com.notiworks.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.notiworks.dao.NotasDAO;
import br.com.notiworks.dto.NotaDTO;
import br.com.notiworks.dto.NotasDTO;
import br.com.notiworks.models.Notas;
import br.com.notiworks.repository.INotaRepository;

@Service
public class NotasService {

	@Autowired
	private INotaRepository iNotaRepository;
	
	@Autowired
	private NotasDAO notasDAO;
	
	@Autowired
	private DirectoryService directoryService;
	
	@Autowired
	private NotasXUserService notasXUserService;
	
	
	public void saveNotas(NotaDTO notaDTO) {
		Notas notas = new Notas();
		BeanUtils.copyProperties(notaDTO, notas);
		LocalDateTime now = LocalDateTime.now();
		notas.setData_atualizacao(now);
		notas.setData_insercao(now);
		Notas nota = iNotaRepository.save(notas);
		notasXUserService.saveNotasXUser(nota);
		directoryService.saveDirectory(nota.getId(), notaDTO.getDirectoryName(), notaDTO.getDirectoryId(), notaDTO.getDirectoryFatherId());
	}

	public List<NotasDTO> findNotasByUserWithOutDirectory() {
		return notasDAO.findNotasByUserWithOutDirectory();
	}
	
	
	
}
