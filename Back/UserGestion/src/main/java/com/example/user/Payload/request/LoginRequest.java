package com.example.user.Payload.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data


public class LoginRequest {
    @NotBlank
    private String userName ;
    @NotBlank
    private String password ;

}
