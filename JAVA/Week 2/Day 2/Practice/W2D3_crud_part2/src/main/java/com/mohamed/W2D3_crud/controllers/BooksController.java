package com.mohamed.W2D3_crud.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mohamed.W2D3_crud.models.Book;
import com.mohamed.W2D3_crud.services.BookService;

@Controller
@RequestMapping("/books")
public class BooksController {

	// Dependencies Injection
	private final BookService bookService;

	public BooksController(BookService bookService) {
		this.bookService = bookService;
	}

	// Show all
	@GetMapping("")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("allBooks", books);
		return "allBooks.jsp";
	}

	// Create
	@PostMapping("/processForm")
	public String create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "pages") Integer numOfPages) {
		Book book = new Book(title, desc, lang, numOfPages);
		Book newBook = bookService.createBook(book);
		return "redirect:/books";
	}

	@GetMapping("/create")
	public String form() {

		return "createBook.jsp";
	}

	// Show one
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("theBook", book);
		return "showBook.jsp";
	}

}
