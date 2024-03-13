package com.example.user.Repository;

import com.example.user.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User,Long> {

}
