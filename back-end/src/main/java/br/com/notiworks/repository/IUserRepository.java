package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.notiworks.models.User;

public interface IUserRepository extends JpaRepository<User, Long>{

	User findByUsername(String userName);
	
}
