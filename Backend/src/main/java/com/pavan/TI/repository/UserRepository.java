package com.pavan.TI.repository;

import com.pavan.TI.model.User1;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User1, Long> {
    User1 findByUsername(String username);  // return User1 directly
}
