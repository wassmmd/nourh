package com.example.user.Repository;

import com.example.user.Entity.Booth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoothRepository extends JpaRepository<Booth,Long> {
   List<Booth> findAllByExhibitorId(Long id);
}
