package com.mohamed.W2D3_crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.mohamed.W2D3_crud.models.Book;
import com.mohamed.W2D3_crud.repositories.BookRepo;

@Service
public class BookService {

	// adding the book repository as a dependency
	private final BookRepo bookRepository;

	public BookService(BookRepo bookRepository) {
		this.bookRepository = bookRepository;
	}

	// ======== CRUD ===========

	// READ ALL
	public List<Book> allBooks() {
		return bookRepository.findAll();
	}

	// CREATE
	public Book createBook(Book b) {
		return bookRepository.save(b);
	}

	// FIND BY ID
	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepository.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	// UPDATE
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}
	// DELETE
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
}
