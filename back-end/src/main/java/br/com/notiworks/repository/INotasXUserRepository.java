package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.NotasXUser;

@Repository
public interface INotasXUserRepository extends JpaRepository<NotasXUser, Long>{

}
