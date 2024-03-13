package com.example.user.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class Booth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id ;

    private String BoothPosition;

    private Integer exhibitorId ;
}
