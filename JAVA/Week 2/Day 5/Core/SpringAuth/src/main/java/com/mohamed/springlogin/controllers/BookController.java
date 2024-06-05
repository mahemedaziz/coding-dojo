package com.mohamed.springlogin.controllers;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mohamed.springlogin.models.Book;
import com.mohamed.springlogin.models.Publisher;
import com.mohamed.springlogin.models.User;
import com.mohamed.springlogin.services.BookService;
import com.mohamed.springlogin.services.PublisherService;
import com.mohamed.springlogin.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
@RequestMapping("/books")
public class BookController {

	// TODO Route Guard for all routes
	// DI
	@Autowired
	private BookService bookServ;
	@Autowired
	private PublisherService pubServ;

	@Autowired
	private UserService userServ;

	private boolean isUserLoggedIn(HttpSession session) {
		return session.getAttribute("user_id") != null;
	}

	// display all books
	@GetMapping("")
	public String home(@ModelAttribute("book") Book book, Model model, HttpSession session) {
		// ROUTE GUARD
		if (!isUserLoggedIn(session)) {
            return "redirect:/";
        }
		
		
//		Long userId = (Long) session.getAttribute("user_id");
//		if (userId == null) {
//			return "redirect:/";
//		}
		// retrieve all books from db
		List<Book> allBooks = bookServ.allBooks();
		model.addAttribute("allBooks", allBooks);
		// retrieve all publishers from db
		List<Publisher> allPublishers = pubServ.allPubs();
		model.addAttribute("publishers", allPublishers);
		return "home.jsp";
	}

	// Process Book
	@PostMapping("/processBook")
	public String createBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model,
			HttpSession s) {
		if (!isUserLoggedIn(s)) {
            return "redirect:/";
        }
		if (result.hasErrors()) {
			// retrieve all books from db
			List<Book> allBooks = bookServ.allBooks();
			model.addAttribute("allBooks", allBooks);
			// retrieve all publishers from db
			List<Publisher> allPublishers = pubServ.allPubs();
			model.addAttribute("publishers", allPublishers);
			return "home.jsp";
		} else {
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User user = userServ.findUserById(userId);
			// set the book's author as the current loggedin user(username)
			book.setAuthor(user);
			Book newBook = bookServ.createBook(book);
			return "redirect:/books";
		}

	}

	@DeleteMapping("/{id}")
	public String deleteBook(@PathVariable("id") Long id , HttpSession session) {
		if (!isUserLoggedIn(session)) {
            return "redirect:/";
        }

		bookServ.deleteBook(id);

		return "redirect:/books";
	}

	// Display Edit Form

	@GetMapping("/edit/{id}")
	public String getMethodName(Model model, @PathVariable("id") Long id , HttpSession session) {
		
		if (!isUserLoggedIn(session)) {
            return "redirect:/";
        }
		// find the book by the id
		Book selectedBook = bookServ.findBookById(id);
		model.addAttribute("book", selectedBook);
		return "edit.jsp";
	}

	@PutMapping("/{id}")
	public String editBook(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession s,
			@PathVariable("id") Long bookId) {
		
		if (!isUserLoggedIn(s)) {
            return "redirect:/";
        }

		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			// if there are no errors save the updated book to DB
			// grab the user id from session
			Long userId = (Long) s.getAttribute("user_id");
			// grab the user by their id
			User ogAuthor = userServ.findUserById(userId);
			// set the author as the current logged-in user
			book.setAuthor(ogAuthor);
			// Grab the old publisher
			Book oldBook = bookServ.findBookById(bookId);
			// set old publisher to the edited book
			book.setPublisher(oldBook.getPublisher());
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}

}
