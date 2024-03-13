package com.example.user.Payload.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SignupRequest {
    private String username ;
    private String firstname ;
    private String lastname ;
    private String phone ;
    @JsonFormat(pattern = "dd.MM.yyyy")
    private LocalDate creationDate ;
    private String email ;
    private Set<String> role ;
}
