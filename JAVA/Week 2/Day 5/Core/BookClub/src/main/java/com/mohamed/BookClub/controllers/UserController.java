package com.mohamed.BookClub.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.BookClub.models.Book;
import com.mohamed.BookClub.models.LoginUser;
import com.mohamed.BookClub.models.User;
import com.mohamed.BookClub.serves.BookService;
import com.mohamed.BookClub.serves.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

	@Autowired
	private UserService userServ;
	@Autowired
	private BookService bookServ;

	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, HttpSession session,
			Model model) {
		userServ.register(newUser, result);
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/books";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result,
			HttpSession session, Model model) {
		User user = userServ.login(newLogin, result);
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("user_id", user.getId());
		return "redirect:/books";
	}

	@RequestMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}

	// RENDER the dashboard Page
	@GetMapping("/books")
	public String dash(HttpSession session, Model model) {
		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		// grab the user from the DB
		User currentUser = userServ.findUserById(userId);
		// for all details
		model.addAttribute("user", currentUser);

		// grab all the project
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks", allBooks);
		return "dashboard.jsp";
	}

}
