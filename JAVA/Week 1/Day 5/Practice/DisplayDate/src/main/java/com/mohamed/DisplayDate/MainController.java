package com.mohamed.DisplayDate;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
    @GetMapping("/")
    public String home() {
        return "index.jsp";
    }

    @GetMapping("/date")
    public String date(Model model) {
        // Obtention de la date actuelle
        LocalDate currentDate = LocalDate.now();

        // Formattage de la date dans le format "dd MMMM yyyy"
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd MMMM yyyy");
        String formattedDate = currentDate.format(dateFormatter);

        // Formattage de l'heure actuelle dans le format "HH:mm:ss"
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = currentTime.format(timeFormatter);

        // Ajout des valeurs au modèle
        model.addAttribute("day", currentDate.getDayOfMonth());
        model.addAttribute("month", currentDate.getMonthValue());
        model.addAttribute("year", currentDate.getYear());
        model.addAttribute("date", formattedDate);
        model.addAttribute("time", formattedTime);

        return "date.jsp";
    }
	  
    @GetMapping("/time")
    public String time(Model model) {
        // Obtention de l'heure actuelle
        LocalDateTime currentTime = LocalDateTime.now();

        // Formattage de l'heure dans le format "HH:mm:ss"
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = currentTime.format(timeFormatter);

        // Ajout de l'heure au modèle
        model.addAttribute("time", formattedTime);

        return "time.jsp";
    }
}