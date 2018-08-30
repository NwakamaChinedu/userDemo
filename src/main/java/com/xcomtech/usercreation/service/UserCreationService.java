package com.xcomtech.usercreation.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xcomtech.usercreation.dao.UserCreationRepository;
import com.xcomtech.usercreation.entities.UserCreationEntity;

@Service
public class UserCreationService {

	@Autowired
	private UserCreationRepository userCreationRepository;
	
	public UserCreationEntity createUser(UserCreationEntity userCreationEntity) {
		return userCreationRepository.save(userCreationEntity);
	}
	
	public UserCreationEntity updateUser(UserCreationEntity userCreationEntity) {
		return userCreationRepository.save(userCreationEntity);
	}
	
	public Iterable<UserCreationEntity> getAllUsers() {
		return userCreationRepository.findAll();
	} 
	
	public UserCreationEntity getUserById(Long id) {
		return userCreationRepository.findById(id).get();
	}
	
	public void deleteUserById(Long id) {
		userCreationRepository.deleteById(id);
	}

}
