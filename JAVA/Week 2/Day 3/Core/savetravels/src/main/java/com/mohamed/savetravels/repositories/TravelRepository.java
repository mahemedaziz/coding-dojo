package com.mohamed.savetravels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.savetravels.models.Travel;


public interface TravelRepository extends CrudRepository<Travel, Long> {
	List<Travel> findAll();
}
