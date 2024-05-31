package com.mohamed.W2D3_crud.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mohamed.W2D3_crud.models.Book;
import com.mohamed.W2D3_crud.services.BookService;

@RestController
@RequestMapping("/api/books")
public class BooksApi {

	// Dependencies Injection
	private final BookService bookService;

	public BooksApi(BookService bookService) {
		this.bookService = bookService;
	}

	@GetMapping("")
	public List<Book> index() {
		return bookService.allBooks();
	}

	// Create
	@PostMapping("")
	public Book create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "pages") Integer numOfPages) {
		Book book = new Book(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}

	// Show One
	@GetMapping("/{id}")
	public Book show(@PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		return book;
	}
	
	// Update
		@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
		public Book update(@PathVariable("id") Long id, @RequestParam(value = "title") String title,
				@RequestParam(value = "description") String desc,
				@RequestParam(value = "language") String lang,
				@RequestParam(value = "pages") Integer numOfPages) {
			
			Book book = new Book(title,desc,lang,numOfPages);
			book.setId(id);
			 book = bookService.updateBook(book);
			return book;
		}

		//Delete
		@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
		public void destroy(@PathVariable("id") Long id) {
			bookService.deleteBook(id);
		}

}
