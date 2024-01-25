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
@Table(name="tbnotas")
@Getter
@Setter
public class Notas {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="titulo_nota", nullable = false)
	private String titulo;
	
	@Column(name="conteudo", nullable = false)
	private String conteudo;
	
	@Column(name="status_compartilhamento", nullable = false)
	private String statusCompartilhamento;
	
	@Column(name="data_insercao", nullable = false)
	private LocalDateTime data_insercao;
	
	@Column(name="data_atualizacao", nullable = false)
	private LocalDateTime data_atualizacao;
	
}
