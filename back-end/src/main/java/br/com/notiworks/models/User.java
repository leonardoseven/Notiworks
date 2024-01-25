package br.com.notiworks.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="tbuser")
@Data
public class User implements Serializable, UserDetails{

	private static final long serialVersionUID = 1L;
	
	//	  id_usuario integer PRIMARY KEY,
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
//	    sobrenome_usuario varchar,
	@Column(name="nome", nullable = false)
	private String nome;
	
	@Column(name="sobrenome")
	private String sobrenome;
	
//	    email_usuario varchar,
	@Column(name="email" , nullable = false)
	private String username;
	
//	    senha_usuario varchar,
	@Column(name="senha", nullable = false)
	private String password;
	
	@Column(name="data_insercao", nullable = false)
	private LocalDateTime data_insercao;
	
	@Column(name="data_atualizacao", nullable = false)
	private LocalDateTime data_atualizacao;
	
	@Column(name="flpremium", nullable = false)
	private int flpremium; 

	
//	    plataforma_auth_usuario varchar,
//	    data_insercao_usuario date,
//	    data_atualizacao_usuario date,
//	    flpremium_usuario varchar,
//	    nome_usuario varchar,
//	    data_inicio_premium_usuario date,
//	    data_final_premium_usuario date,
//	    cargo_usuario varchar,
//	    empresa_usuario varchar,
//	    fk_telefone_usuario_telefone_usuario_PK integer,
//	    chave varchar,
//	    Usuario_TIPO INT
	
	
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_ADMIN");
		List<SimpleGrantedAuthority> updatedAuthorities = new ArrayList<SimpleGrantedAuthority>();
		updatedAuthorities.add(authority);
		return updatedAuthorities;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
