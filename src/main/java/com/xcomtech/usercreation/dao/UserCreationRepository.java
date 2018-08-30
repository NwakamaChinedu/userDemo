package com.xcomtech.usercreation.dao;

//import java.util.Optional;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.xcomtech.usercreation.entities.UserCreationEntity;

@Repository
public interface UserCreationRepository extends CrudRepository<UserCreationEntity, Long> {

}
