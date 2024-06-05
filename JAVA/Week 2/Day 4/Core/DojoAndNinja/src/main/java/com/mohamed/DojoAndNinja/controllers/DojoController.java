package com.mohamed.DojoAndNinja.controllers;

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

import com.mohamed.DojoAndNinja.models.Dojo;
import com.mohamed.DojoAndNinja.services.DojoService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {

	@Autowired
	private DojoService dojoServ;

	@GetMapping("/new")
	public String newDojoForm(@ModelAttribute("dojo") Dojo dojo, Model model) {
		List<Dojo> allDojos = dojoServ.allDojos();
		model.addAttribute("dojos", allDojos);
		return "dojo.jsp";
	}

	@PostMapping("/processDojo")
	public String processDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Dojo> allDojos = dojoServ.allDojos();
			model.addAttribute("dojos", allDojos);
			return "dojo.jsp";
		} else {
			dojoServ.createDojo(dojo);
			return "redirect:/ninjas/new";
		}
	}

	@GetMapping("/{id}")
	public String oneDojo(@PathVariable Long id, Model model) {
		Dojo savedDojo = dojoServ.findDojoById(id);
		model.addAttribute("dojo", savedDojo);
		return "oneDojo.jsp";
	}
}
