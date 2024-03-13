package com.example.user.Payload.reponse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.xml.stream.events.StartElement;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class JwtReponse {
private String jwt ;
private final String type ="Bearer";
private  Long id ;
private String username ;
private String email    ;
private String firstName ;
private String phoneNumber ;
private List<String> roles ;
}
