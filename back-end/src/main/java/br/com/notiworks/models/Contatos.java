package br.com.notiworks.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbcontatos")
@Getter
@Setter
public class Contatos {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="nome", nullable = false)
	private String nome;
	
	@Column(name="email", nullable = false)
	private String email;
	
	@Column(name="data_insercao", nullable = false)
	private LocalDateTime data_insercao;
	
	@Column(name="data_atualizacao", nullable = false)
	private LocalDateTime data_atualizacao;
	
	
}
