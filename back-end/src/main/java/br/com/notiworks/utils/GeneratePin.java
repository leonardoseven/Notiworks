package br.com.notiworks.utils;

import java.util.Random;

public class GeneratePin {

	public static String generate() {
		Random random = new Random();
	    StringBuilder pinBuilder = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            int digito = random.nextInt(10); // Gera um número aleatório entre 0 e 9
            pinBuilder.append(digito);
        }
        return pinBuilder.toString();
	}
	
}
