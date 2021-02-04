package com.example.coffeedemo.repository;

import com.example.coffeedemo.model.ERole;
import com.example.coffeedemo.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role , Long> {

    Optional<Role> findByName(ERole name);

}
