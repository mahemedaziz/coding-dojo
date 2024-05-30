package com.mohamed.Omikuji_Form.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller

public class MainController {
	
	
	@RequestMapping("/omikuji")
	public String form() {
		return "form.jsp";
	}
	

	// === Action Route ===
	@RequestMapping(value = "/processForm", method = RequestMethod.POST)
	public String processString (@RequestParam("number") Integer number,
			@RequestParam("city") String city,
			@RequestParam("person") String person,
			@RequestParam("hobby") String hobby,
			@RequestParam("thing") String thing,
			@RequestParam("compliment") String compliment,
			HttpSession s) {
		s.setAttribute("number", number);
		s.setAttribute("city", city);
		s.setAttribute("person", person);
		s.setAttribute("hobby", hobby);
		s.setAttribute("thing", thing);
		s.setAttribute("compliment", compliment);
		return "redirect:/omikuji/show";	
	}
	
	// === Display Route ===
		@RequestMapping("/omikuji/show")
		public String showResult() {
			return "resultat.jsp";
		}

}
