package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.Notas;

@Repository
public interface INotaRepository extends JpaRepository<Notas, Long>{

}
