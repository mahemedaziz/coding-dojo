package com.mohamed.BookClub.serves;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.mohamed.BookClub.models.LoginUser;
import com.mohamed.BookClub.models.User;
import com.mohamed.BookClub.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	public User register(User newUser, BindingResult result) {
		Optional<User> opUser = userRepo.findByEmail(newUser.getEmail());
		if (opUser.isPresent()) {
			result.rejectValue("email", "registerErrors", "Email is already taken !");
		}
		if (!newUser.getPassword().equals(newUser.getComfirmPassword())) {
			result.rejectValue("confirmPassword", "registerErrors", "Passwoed and Confirmpassword must match !");
		}
		if (result.hasErrors()) {
			return null;
		} else {
			newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
			return userRepo.save(newUser);
		}
	}

	public User login(LoginUser newLoginUser, BindingResult result) {
		Optional<User> opUser = userRepo.findByEmail(newLoginUser.getEmail());
		if (!opUser.isPresent()) {
			result.rejectValue("email", "LoginErrors", "Invalid credential !");
		} else {
			User user = opUser.get();
			// check the password
			if (!BCrypt.checkpw(newLoginUser.getPassword(), user.getPassword())) {
				result.rejectValue("password", "LoginErrors", "Invalid credential !");
			}
			if (result.hasErrors()) {
				return null;
			} else {
				return user;
			}
		}
		return null;
	}
	
	public User findUserById(Long id) {
		Optional<User> maybeUser = userRepo.findById(id);
		if (maybeUser.isPresent()) {
			return maybeUser.get();
		}else {
			return null;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
