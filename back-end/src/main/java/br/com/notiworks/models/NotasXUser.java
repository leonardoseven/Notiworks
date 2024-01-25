package br.com.notiworks.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbnotasxuser")
@Getter
@Setter
public class NotasXUser {

private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="id_user", nullable = false)
	private Long idUser;
	
	@Column(name="id_nota", nullable = false)
	private Long idNota;
	
}
