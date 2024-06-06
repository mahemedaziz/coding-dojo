package com.mohamed.BookClub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.BookClub.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	//Grab all the project
	List<Book>findAll ();
	
	
}
