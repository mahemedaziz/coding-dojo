package com.mohamed.menuLooping.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.menuLooping.models.Item;

@Controller

public class ItemController {
	@RequestMapping("/")
	public String index (Model model) {
		ArrayList<Item> fruits = new ArrayList<Item>();
		fruits.add(new Item("Kiwi", 1.5));
		fruits.add(new Item("Mango", 2.0));
		fruits.add(new Item("Goji Berries", 4.0));
		fruits.add(new Item("Guava", 0.75));
		model.addAttribute("fruitsFromController",fruits);
		return "index.jsp";
	}

}
