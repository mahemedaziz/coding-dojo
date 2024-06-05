package com.mohamed.springlogin.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.springlogin.models.Publisher;

public interface PublisherRepository extends CrudRepository<Publisher, Long> {

	// READ ALL
	List<Publisher> findAll();
}
