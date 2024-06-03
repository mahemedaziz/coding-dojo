package com.mohamed.savetravels.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import com.mohamed.savetravels.models.Travel;
import com.mohamed.savetravels.services.TravelService;

import jakarta.validation.Valid;

@Controller
public class MainController {

	@Autowired
	TravelService travelService;

	@GetMapping("/")
	public String home(@ModelAttribute("travel") Travel travel, Model model) {
		List<Travel> travels = travelService.allTravels();
		model.addAttribute("travels", travels);
		return "index.jsp";
	}

	@PostMapping("/addTravel")
	public String home(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Travel> travels = travelService.allTravels();
			model.addAttribute("travels", travels);
			return "index.jsp";
		}
		travelService.createTravel(travel);
		return "redirect:/";
	}

	@RequestMapping("/travels/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Travel travel = travelService.findTravelById(id);
		model.addAttribute("travel", travel);
		return "edit.jsp";
	}

	@RequestMapping(value = "/travels/{id}", method = RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("travel", travel);
			return "edit.jsp";
		} else {
			travelService.updateTravel(travel);
			return "redirect:/";
		}

	}
	   @DeleteMapping("/travels/{id}")
	    public String destroy(@PathVariable("id") Long id) {
	        travelService.deleteTravel(id);
	        return "redirect:/";
	    }
	
	// Show one
	
	   @GetMapping("travels/{id}")
		public String show(@PathVariable("id") Long id, Model model) {
			Travel travel = travelService.findTravel(id);
			model.addAttribute("theTravel", travel);
			return "showTravel.jsp";
	   }
	
	
	
	
	
	
	

}
