package com.mohamed.burgertracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mohamed.burgertracker.models.Burger;
import com.mohamed.burgertracker.repositories.BurgerRepository;

@Service
public class BurgerService {

	private final BurgerRepository burgerRepo;

	public BurgerService(BurgerRepository burgerRepo) {
		this.burgerRepo = burgerRepo;
	}
	
	// ======== CRUD ===========

		// READ ALL
	
	public List<Burger>allBurgers(){
		return burgerRepo.findAll();
	}
	// CREATE
	public Burger addBurger(Burger burger) {
		return burgerRepo.save(burger);
	}
	
	// FIND BY ID
	public Burger findBurger(Long id) {
		Optional<Burger> optionalBurger = burgerRepo.findById(id);
		if(optionalBurger.isPresent()) {
			return optionalBurger.get();
		}else {
			return null;
		}
	}
	//UPDATE
	public Burger updateBurger(Burger burger) {
		return burgerRepo.save(burger);
	}

}
