package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.ContatosXUser;

@Repository
public interface IContatosXUserRepository extends JpaRepository<ContatosXUser, Long>{


	ContatosXUser findByIdContatoAndIdUser(Long id, Long userId);

}
