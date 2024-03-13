package com.example.user.Service;

import com.example.user.Entity.User;

import java.util.List;

public interface UserService {

public void saveUser(User user);
    public List<User> findAllUsers();
public User findUserById(long id);
    User getUserById(Long id);
    void deleteUser(Long id);


}
