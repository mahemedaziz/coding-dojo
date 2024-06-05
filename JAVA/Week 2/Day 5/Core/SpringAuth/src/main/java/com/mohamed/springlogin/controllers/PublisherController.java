package com.mohamed.springlogin.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.springlogin.models.Publisher;
import com.mohamed.springlogin.services.PublisherService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/publishers")
public class PublisherController {

	//TODO Route Guard for all routes

	// DI
	@Autowired
	private PublisherService pubServ;
	
	private boolean isUserLoggedIn(HttpSession session) {
		return session.getAttribute("user_id") != null;
	}
	
	// Display Publisher creation form
	@GetMapping("")
	public String allPubs(@ModelAttribute Publisher publisher, Model model ,
			HttpSession session) {
		// ROUTE GUARD
				if (!isUserLoggedIn(session)) {
		            return "redirect:/";
		        }
		List<Publisher> allPubs = pubServ.allPubs();
		model.addAttribute("pubs",allPubs);
		return "publisher.jsp";
	}
	
	// create a publisher
	@PostMapping("/processPub")
	public String processPublisher(@Valid @ModelAttribute Publisher publisher,
			BindingResult result, Model model ,HttpSession session) {
		// ROUTE GUARD
				if (!isUserLoggedIn(session)) {
		            return "redirect:/";
		        }
		if(result.hasErrors()) {
			List<Publisher> allPubs = pubServ.allPubs();
			model.addAttribute("pubs",allPubs);
			return "publisher.jsp";
		}
		// save the publisher to the DB
		pubServ.createPublisher(publisher);
		return "redirect:/publishers";
	}
	
	
	// show one publisher
	@GetMapping("/{id}")
	public String onePublisher(@PathVariable Long id, Model model,HttpSession session) {
		// ROUTE GUARD
				if (!isUserLoggedIn(session)) {
		            return "redirect:/";
		        }
		Publisher savedPub = pubServ.findPublisherById(id);
		model.addAttribute("publisher", savedPub);
		return "onePublisher.jsp";
	}
	
	
	
	
	
	
	
	
	
}
