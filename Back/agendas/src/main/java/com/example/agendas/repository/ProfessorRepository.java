package com.example.agendas.repository;


import com.example.agendas.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
