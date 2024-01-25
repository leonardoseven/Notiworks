package br.com.notiworks.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.DirectoryXNotas;

@Repository
public interface IDirectoryXNotasRepository extends JpaRepository<DirectoryXNotas, Long>{

	List<DirectoryXNotas> findByIdDirectory(Long directoryid);

	
	
	
}
