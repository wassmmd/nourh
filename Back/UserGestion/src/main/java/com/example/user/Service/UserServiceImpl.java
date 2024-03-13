package com.example.user.Service;



import com.example.user.Entity.User;
import com.example.user.Repository.UserRepo;
import jakarta.persistence.Id;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepo userRepo;


    @Override
    public void saveUser(User user) {
        userRepo.save(user);
    }

    @Override
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User findUserById(long id) {
        return userRepo.findById(id).orElse(null);
    }

    @Override
    public User getUserById(Long id) {return userRepo.getById((id));}

    @Override
    public void deleteUser(Long id) {

    }
}
