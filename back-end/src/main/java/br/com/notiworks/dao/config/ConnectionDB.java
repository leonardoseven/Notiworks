package br.com.notiworks.dao.config;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.context.EnvironmentAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:application.properties")
public class ConnectionDB implements EnvironmentAware {
	
    private Environment environment;

    private String path;
    
    private String className;
    
    private String userName;
    
    private String password;
    
    
    @Override
    public void setEnvironment(final Environment environment) {
        this.environment = environment;
    }

    @Bean
	public void setProperties() throws Exception {
    	this.path = environment.getProperty("spring.datasource.url");
    	this.userName= environment.getProperty("spring.datasource.username");
    	password = environment.getProperty("spring.datasource.password");
    	className = environment.getProperty("spring.datasource.driver-class-name");
	}
    
    public Connection getConnection() throws Exception {
		try {
			Class.forName(className);
			Connection con = DriverManager.getConnection(
					path,
					userName,
					password);
			return con;
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}
}
