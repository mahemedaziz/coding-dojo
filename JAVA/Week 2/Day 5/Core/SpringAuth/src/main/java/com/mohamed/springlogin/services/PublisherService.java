package com.mohamed.springlogin.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mohamed.springlogin.models.Publisher;
import com.mohamed.springlogin.repositories.PublisherRepository;

@Service
public class PublisherService {

	// Business LOGIC
		// C R U D
		
		// DI
		@Autowired
		private PublisherRepository publisherRepo;
		
		// READ ALL
		public List<Publisher> allPubs(){
			return publisherRepo.findAll();
		}
		
		// CREATE
		public Publisher createPublisher(Publisher p) {
			return publisherRepo.save(p);
		}
		
		
		// READ ONE
		public Publisher findPublisherById(Long id) {
			Optional<Publisher> maybePub = publisherRepo.findById(id);
			if(maybePub.isPresent()) {
				return maybePub.get();
			}else {
				return null;
			}
		}
		
		// UPDATE
		public Publisher updatePublisher(Publisher p) {
			return publisherRepo.save(p);
		}
		
		// DELETE
		public void deletePublisher(Long id) {
			publisherRepo.deleteById(id);
		}
}
