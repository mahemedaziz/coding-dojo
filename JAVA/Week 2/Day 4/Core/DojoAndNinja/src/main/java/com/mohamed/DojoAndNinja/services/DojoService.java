package com.mohamed.DojoAndNinja.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.mohamed.DojoAndNinja.models.Dojo;
import com.mohamed.DojoAndNinja.repositories.DojoRepository;



@Service
public class DojoService {
	// DI
			@Autowired
			private DojoRepository dojoRepo;
			// READ ALL
			public List<Dojo> allDojos(){
				return dojoRepo.findAll();
			}
			
			// CREATE
			public Dojo createDojo(Dojo d) {
				return dojoRepo.save(d);
			}
			
			// READ ONE
			public Dojo findDojoById(Long id) {
				Optional<Dojo> maybeDojo = dojoRepo.findById(id);
				if(maybeDojo.isPresent()) {
					return maybeDojo.get();
				}else {
					return null;
				}
			}
			
			// UPDATE
			public Dojo updateDojo(Dojo d) {
				return dojoRepo.save(d);
			}
			
			// DELETE
			public void deleteDojo(Long id) {
				dojoRepo.deleteById(id);
			}
			
			
			
			
			
			
			
			
			
}
