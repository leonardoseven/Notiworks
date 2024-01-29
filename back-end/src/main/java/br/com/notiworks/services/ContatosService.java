package br.com.notiworks.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.notiworks.configs.security.UsuarioLogado;
import br.com.notiworks.dao.ContatosDAO;
import br.com.notiworks.dto.ContatosDTO;
import br.com.notiworks.models.Contatos;
import br.com.notiworks.models.User;
import br.com.notiworks.repository.IContatosRepository;

@Service
public class ContatosService {

	@Autowired
	private IContatosRepository contatosRepository;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UsuarioLogado usuarioLogado; 
	
	@Autowired
	private ContatosDAO contatosDAO;
	
	@Autowired
	private ContatosXUserService contatosXUserService;
	
	public ContatosDTO saveContato(ContatosDTO dto) {
		User user = userService.findByUsername(dto.getEmail());
		if(user == null) {
			dto.setErroMsg("Usuário não encontrado, para ser adicionado aos contatos.");
			return dto;
		}
		Contatos findByUsername = contatosRepository.findByUsername(dto.getEmail());
		if(findByUsername == null) {
			Contatos contatos = new Contatos();
			BeanUtils.copyProperties(dto, contatos);
			LocalDateTime now = LocalDateTime.now();
			contatos.setData_atualizacao(now);
			contatos.setData_insercao(now);
			Contatos saved = contatosRepository.save(contatos);
			contatosXUserService.saveContatosXUser(usuarioLogado.getId(), contatos);
			dto.setId(saved.getId());
			return dto;
		}else {
			contatosXUserService.saveContatosXUser(usuarioLogado.getId(), findByUsername);
		}
		return dto;
		
	}

	public List<Contatos> listByUser() {
		return contatosRepository.findByUserId(usuarioLogado.getId());
	}
	
	
}
