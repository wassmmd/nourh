package com.example.user.Payload.reponse;

import org.apache.logging.log4j.message.Message;

public class MesssageReponse {
    private String message ;



    public MesssageReponse(String message) {
        message= message ;

    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
