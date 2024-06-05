package com.mohamed.DojoAndNinja.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.DojoAndNinja.models.Dojo;
import com.mohamed.DojoAndNinja.models.Ninja;
import com.mohamed.DojoAndNinja.services.DojoService;
import com.mohamed.DojoAndNinja.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {

    @Autowired
    private NinjaService ninjaServ;
    
    @Autowired
    private DojoService dojoServ;

    @GetMapping("/new")
    public String newNinjaForm(@ModelAttribute("ninja") Ninja ninja, Model model) {
        List<Dojo> allDojos = dojoServ.allDojos();
        model.addAttribute("dojos", allDojos);
        
        List<Ninja> allNinjas = ninjaServ.allNinjas();
        model.addAttribute("allNinjas", allNinjas);
        
        return "ninja.jsp";
    }

    @PostMapping("/processNinja")
    public String processNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
        if (result.hasErrors()) {
            List<Dojo> allDojos = dojoServ.allDojos();
            model.addAttribute("dojos", allDojos);
            
            List<Ninja> allNinjas = ninjaServ.allNinjas();
            model.addAttribute("allNinjas", allNinjas);
            return "ninja.jsp"; // Retourner à la même page avec le formulaire
        } else {
            ninjaServ.createNinja(ninja);
            return "redirect:/ninjas/home"; // Rediriger à la page d'accueil lorsque le formulaire est valide
        }
    }
    @GetMapping("/home")
    public String homePage(Model model) {
        List<Ninja> allNinjas = ninjaServ.allNinjas();
        model.addAttribute("allNinjas", allNinjas);
        return "home.jsp";
    }
    
}
