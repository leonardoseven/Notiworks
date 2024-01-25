package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.Directory;

@Repository
public interface IDirectoryRepository  extends JpaRepository<Directory, Long>{

}
