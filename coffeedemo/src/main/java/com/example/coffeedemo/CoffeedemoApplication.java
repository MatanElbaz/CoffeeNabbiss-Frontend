package com.example.coffeedemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class CoffeedemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CoffeedemoApplication.class, args);
	}

}
