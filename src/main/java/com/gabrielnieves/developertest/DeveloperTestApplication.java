package com.gabrielnieves.developertest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class DeveloperTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeveloperTestApplication.class, args);
	}

	@Bean
	public RestTemplate getRestTemplate() {return new RestTemplate();}
}
