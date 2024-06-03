package com.mohamed.burgertracker.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mohamed.burgertracker.models.Burger;

@Repository
public interface BurgerRepository extends CrudRepository<Burger , Long> {
	List<Burger> findAll();
}
