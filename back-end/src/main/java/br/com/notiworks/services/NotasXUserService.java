package br.com.notiworks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.notiworks.configs.security.UsuarioLogado;
import br.com.notiworks.models.Notas;
import br.com.notiworks.models.NotasXUser;
import br.com.notiworks.repository.INotasXUserRepository;

@Service
public class NotasXUserService {

	
	@Autowired
	private INotasXUserRepository notasXUserRepository;
	
	@Autowired
	private UsuarioLogado usuarioLogado;
	
	public void saveNotasXUser(Notas nota) {
		NotasXUser n = new NotasXUser();
		n.setIdNota(nota.getId());
		n.setIdUser(usuarioLogado.getId());
		notasXUserRepository.save(n);
	}

}
