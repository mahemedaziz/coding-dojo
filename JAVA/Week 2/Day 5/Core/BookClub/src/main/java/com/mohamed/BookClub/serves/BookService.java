package com.mohamed.BookClub.serves;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mohamed.BookClub.models.Book;
import com.mohamed.BookClub.repositories.BookRepository;


@Service
public class BookService {

	@Autowired
	private BookRepository bookRepo;
	
	// read all
		public List<Book> allBooks() {
			return bookRepo.findAll();
		}

		// create
		public Book createBook(Book b) {
			return bookRepo.save(b);
		}

		// read one
		public Book findBookById(Long id) {
			Optional<Book> maybeBook = bookRepo.findById(id);
			if (maybeBook.isPresent()) {
				return maybeBook.get();
			}
			return null;
		}

		// Edit
		public Book updateBook(Book b) {
			return bookRepo.save(b);
		}

		// DELETE
		public void deleteBook(Long id) {
			bookRepo.deleteById(id);
		}
	
	
	
	
	
	
	
	
	
	
}
