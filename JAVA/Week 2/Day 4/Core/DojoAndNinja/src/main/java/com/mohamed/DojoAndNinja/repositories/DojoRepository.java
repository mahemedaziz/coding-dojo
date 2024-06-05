package com.mohamed.DojoAndNinja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.DojoAndNinja.models.Dojo;



public interface DojoRepository extends CrudRepository<Dojo, Long> {
	// Find ALL BOOKS
		List<Dojo> findAll();
}
