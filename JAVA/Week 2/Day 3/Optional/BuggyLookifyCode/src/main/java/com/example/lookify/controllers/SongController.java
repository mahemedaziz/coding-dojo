package com.example.lookify.controllers;

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
import org.springframework.web.bind.annotation.RequestParam;

import com.example.lookify.models.Song;
import com.example.lookify.services.SongService;

import jakarta.validation.Valid;

@Controller
public class SongController {
    
    @Autowired
    private SongService songService;
    
    @GetMapping("/")
    public String index() {
        return "index.jsp";
    }
    
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        List<Song> songs = songService.allSongs();
        model.addAttribute("songs", songs);
        return "dashboard.jsp";
    }
    
    @GetMapping("/songs/new")
    public String newSong(@ModelAttribute("song") Song song) {
        return "add.jsp";
    }
    
    @PostMapping("/songs/new")
    public String createSong(@Valid @ModelAttribute("song") Song song, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "add.jsp";
        } else {
            songService.addSong(song);
            return "redirect:/dashboard";
        }
    }
    
    @GetMapping("/songs/{id}")
    public String details(@PathVariable("id") Long id, Model model) {
        Song song = songService.findSong(id);
        if (song != null) {
            model.addAttribute("song", song);
            return "details.jsp";
        } else {
            return "redirect:/dashboard";
        }
    }
    
    @GetMapping("/top-ten")
    public String topTen(Model model) {
        List<Song> songs = songService.topTen();
        model.addAttribute("songs", songs);
        return "top.jsp";
    }
    
    @RequestMapping("/songs/{id}/delete")
    public String deleteSong(@PathVariable("id") Long id) {
        Song song = songService.findSong(id);
        if (song != null) {
            songService.deleteSong(song);
        }
        return "redirect:/dashboard";
    }
    @GetMapping("/search")
    public String search(@RequestParam("artist") String artist, Model model) {
        List<Song> songs = songService.findByArtist(artist);
        model.addAttribute("songs", songs);
        model.addAttribute("artist", artist);
        return "dashboard.jsp";
    }
}
