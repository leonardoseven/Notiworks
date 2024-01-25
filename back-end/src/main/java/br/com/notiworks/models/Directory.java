package br.com.notiworks.models;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbdirectory")
@Getter
@Setter
public class Directory {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="nome_diretorio", nullable = false)
	private String nome;
	
	@Column(name="data_insercao", nullable = false)
	private LocalDateTime data_insercao;
	
	@Column(name="data_atualizacao", nullable = false)
	private LocalDateTime data_atualizacao;
	
	@Column(name="diretorio_pai_id", nullable = true)
	private Long diretorioPaiId;
	
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "diretorio_pai_id" ,insertable=false, updatable=false)
    private Directory pai;
	
}
