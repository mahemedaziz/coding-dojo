package com.mohamed.burgertracker.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mohamed.burgertracker.models.Burger;
import com.mohamed.burgertracker.repositories.BurgerRepository;

@Service
public class BurgerService {

	private final BurgerRepository burgerRepo;

	public BurgerService(BurgerRepository burgerRepo) {
		this.burgerRepo = burgerRepo;
	}
	
	public List<Burger>allBurgers(){
		return burgerRepo.findAll();
	}
	
	public Burger addBurger(Burger burger) {
		return burgerRepo.save(burger);
	}

}
