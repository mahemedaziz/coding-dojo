package com.mohamed.DojoAndNinja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mohamed.DojoAndNinja.models.Ninja;



public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	
	//Read All
		List<Ninja> findAll();

}
