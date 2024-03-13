package com.example.user.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
@Data



public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String userName ;
    private String firstName ;
    private String lastName ;
    @NotBlank
    private String code;
    @NotBlank
    private String password ;
    @NotBlank
    @Email
    private String email ;
    private String qrCode ;
    @Enumerated(EnumType.STRING)
    private Role Role ;
    private String phoneNumber ;

    @Enumerated(EnumType.STRING)
    private Location location;

    @JsonFormat( pattern="dd.MM.yyyy")
    private LocalDate creationDate ;





}
