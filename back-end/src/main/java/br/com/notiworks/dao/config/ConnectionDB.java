package br.com.notiworks.dao.config;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

public class ConnectionDB {

	@Value("${spring.datasource.url}")
	private static String path;
	
	@Value("${spring.datasource.driver-class-name}")
	private static String className;
	
	@Value("${spring.datasource.username}")
	private static String dbUserName;
	
	@Value("${spring.datasource.password}")
	private static String dbPassword;
	
	public static Connection getConnection() throws Exception {
		try {
			Class.forName(className);
			Connection con = DriverManager.getConnection(path,dbUserName,dbPassword);
			return con;
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}
}
