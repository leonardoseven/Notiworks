package br.com.notiworks.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.notiworks.dao.config.ConnectionDB;

@Component
public class ContatosDAO {

	
	@Autowired
	private ConnectionDB connectionDB;

}
