package com.mohamed.savetravels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;


import com.mohamed.savetravels.models.Travel;
import com.mohamed.savetravels.repositories.TravelRepository;

@Service
public class TravelService {

	private final TravelRepository travelRepo;
	
	public TravelService(TravelRepository travelRepo) {
		this.travelRepo=travelRepo;
	}
	
	// ======== CRUD ===========
	
	// Create
	public Travel createTravel(Travel travel) {
		return travelRepo.save(travel);
	}
	
	//Read One
	public Travel findTravelById(Long id) {
		Optional<Travel> optionalTravel=travelRepo.findById(id);
		if(optionalTravel.isPresent()) {
			return optionalTravel.get();
		}else {
			return null;
		}
	}
	
	//Read All
	public List<Travel>allTravels(){
		return travelRepo.findAll();
	}
	
	//Edit
	public Travel updateTravel(Travel travel) {
		return travelRepo.save(travel);
	}
	
	//Delete
	public void deleteTravel(Long id) {
		travelRepo.deleteById(id);
	}
	// FIND BY ID
		public Travel findTravel(Long id) {
			Optional<Travel> optionalTravel = travelRepo.findById(id);
			if (optionalTravel.isPresent()) {
				return optionalTravel.get();
			} else {
				return null;
			}
		}
	
	
	
	
	
	
	
	
	
}
