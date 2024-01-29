package br.com.notiworks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.notiworks.models.Contatos;
import br.com.notiworks.models.ContatosXUser;
import br.com.notiworks.repository.IContatosXUserRepository;

@Service
public class ContatosXUserService {

	@Autowired
	private IContatosXUserRepository contatosXUserRepository;
	
	
	public void saveContatosXUser(Long userId, Contatos contatos) {
		ContatosXUser conUser = new ContatosXUser();
		conUser.setIdContato(contatos.getId());
		conUser.setIdUser(userId);
		ContatosXUser findByIdContatoAndEqualsdUser = contatosXUserRepository.findByIdContatoAndIdUser(contatos.getId(), userId);
		if(findByIdContatoAndEqualsdUser == null)
			contatosXUserRepository.save(conUser);
	}
	
}
