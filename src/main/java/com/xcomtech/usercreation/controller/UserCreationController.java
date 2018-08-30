package com.xcomtech.usercreation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.xcomtech.usercreation.entities.UserCreationEntity;
import com.xcomtech.usercreation.service.UserCreationService;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class UserCreationController {
	
	@Autowired
	private UserCreationService userCreationService;
	
	@PostMapping(value="/create")
	public UserCreationEntity createUsers(@RequestBody UserCreationEntity userCreationEntity){
		return userCreationService.createUser(userCreationEntity);
	}
	
	@PutMapping (value="/update")
	public UserCreationEntity updateUser(@RequestBody UserCreationEntity userCreationEntity){
		return userCreationService.updateUser(userCreationEntity);
	}
	
	@GetMapping(value="/users")
	private Iterable<UserCreationEntity> getAllBookedTickets(){
		return userCreationService.getAllUsers();
	}
	
	@GetMapping("/user/{id}")
	public UserCreationEntity getUser(@PathVariable("id") Long id){
		return userCreationService.getUserById(id);
	}
	
	@DeleteMapping(value="/user/{id}")
	private void deleteTickesById(@PathVariable("id") Long id){
		userCreationService.deleteUserById(id);
	}
}
