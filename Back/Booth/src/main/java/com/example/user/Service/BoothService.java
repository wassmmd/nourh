package com.example.user.Service;

import com.example.user.Entity.Booth;

import java.util.List;

public interface BoothService {

public void saveBooth(Booth booth);
    public List<Booth> findAllBooths();

    List<Booth> findAllBoothsByExhibitorId(Long exhibitor_id);
}
