package com.example.user.Controller;

import com.example.user.Entity.User;
import com.example.user.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Users/User")
@RequiredArgsConstructor
public class Controller {
    private final UserService
            userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(
            @RequestBody User user
            )
    {
        userService.saveUser(user);
    }
    @GetMapping
    public ResponseEntity<List<User>> findAllUsers(){
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @GetMapping("/findbyId/{user}")
    public ResponseEntity<User> findById(@PathVariable("user") Long user){
        return ResponseEntity.ok(userService.findUserById(user));
    }
}
