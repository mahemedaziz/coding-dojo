package com.mohamed.HelloHuman.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")

public class HelloHumanController {
//	@RequestMapping("")
//	public String index() {
//		return "Hello Human";
//	}
	
	
	@RequestMapping("/")
	public String name (@RequestParam (value = "name", required = false) String searchTerm) {
		return "You searched for " + searchTerm;
	}
	
	   // Mapping for the URL with 'name' and 'lastName' query parameters
    // Example: http://localhost:8080/search?name=John&lastName=Doe
    @RequestMapping("/search")
    public String last(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "lastName", required = false) String lastName) {
        return "You searched for " + name + " " + lastName;
    }
    
 // Mapping for the URL with 'name', 'lastName', and 'times' query parameters
    // Example: http://localhost:8080/repeat?name=aziz&lastName=berrais&times=3
    @RequestMapping("/repeat")
    public String repeatGreeting(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "lastName", required = false) String lastName,
            @RequestParam(value = "times", required = false, defaultValue = "1") int times) {
        StringBuilder greeting = new StringBuilder();
        String message = "Hello "+name + " " + lastName;
        for (int i = 0; i < times; i++) {
            greeting.append(message).append(" ");
        }
        return greeting.toString().trim();
    }
	

}
