package com.mohamed.BookClub.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.BookClub.models.Book;
import com.mohamed.BookClub.models.User;
import com.mohamed.BookClub.serves.BookService;
import com.mohamed.BookClub.serves.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	@Autowired
	private UserService userServ;

	@Autowired
	private BookService bookServ;

	// Render the form page - Render Route
	@GetMapping("/new")
	public String newBook(@ModelAttribute("book") Book book, HttpSession session) {
		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		return "newBook.jsp";
	}

	// Render the form page - Action Route
	@PostMapping("/process")
	public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession s) {
		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		// if errors display them
		if (result.hasErrors()) {
			return "newBook.jsp";
		} else {
			// 2. get the user from DB by ID
			User currentUser = userServ.findUserById(userId);
			// 3. set the currentUser book lead
			book.setPosted(currentUser);
			// 4. save the book to the DB
			Book newBook = bookServ.createBook(book);

			return "redirect:/books";
		}
	}

	// Display the edit form - RENDER ROUTE

	@GetMapping("/{id}/edit")
	public String updateBook(@PathVariable("id") Long id, Model model, HttpSession s) {

		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		Book book = bookServ.findBookById(id);
		model.addAttribute("book", book);
		return "edit.jsp";
	}
	// Display the edit form - ACTION ROUTE

	@PutMapping("/{id}/edit")
	public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession s) {
		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}

		if (result.hasErrors()) {
			return "edit.jsp";
		} else {

			// grab the user from DB
			User currentUser = userServ.findUserById(userId);
			// ******set the current user as the book's posted
			book.setPosted(currentUser);
			// save the updated book the DB
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}

	// Show One Book - RENDER ROUTE
	@GetMapping("/{id}")
	public String showOneBook(@ModelAttribute("book") Book book, @PathVariable("id") Long id, Model model,
			HttpSession s) {
		// GUARD ROUTE
		// grab the id of the current logged-in user
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		// grab the book by ID from DB
		Book selectedBook = bookServ.findBookById(id);
		// grab the user from DB
		User currentUser = userServ.findUserById(userId);
		// ******set the current user as the book's posted
		book.setPosted(currentUser);
		model.addAttribute("book", selectedBook);

		return "oneBook.jsp";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable("id") Long id, HttpSession s) {
		//GUARD ROUTE
		//grab the id of the current logged-in user
		Long userId = (Long) s.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
	
	
	
	
	
	
	
	
	
	

}
