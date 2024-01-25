package br.com.notiworks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@EnableAutoConfiguration	
@SpringBootApplication
public class NotiworksApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotiworksApplication.class, args);
	}

}
