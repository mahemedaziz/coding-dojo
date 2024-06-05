package com.mohamed.springlogin.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.springlogin.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	// Find ALL BOOKS
	List<Book> findAll();
}
