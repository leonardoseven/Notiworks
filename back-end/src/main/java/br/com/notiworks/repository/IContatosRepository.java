package br.com.notiworks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.notiworks.models.Contatos;

@Repository
public interface IContatosRepository extends JpaRepository<Contatos, Long>{

	@Query(value = "SELECT c.* from tbcontatos c inner join tbcontatosxuser cu on cu.id_contato = c.id where c.email = :email and cu.id_user = :userid ", nativeQuery = true)
	Contatos findByUserIdAndUsername(@Param("email") String email, @Param("userid") Long id);
	
	@Query(value = "SELECT c.* from tbcontatos c where c.email = :email", nativeQuery = true)
	Contatos findByUsername(@Param("email") String email);
}
