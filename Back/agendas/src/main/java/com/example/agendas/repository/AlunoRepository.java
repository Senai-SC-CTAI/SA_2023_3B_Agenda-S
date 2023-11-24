package com.example.agendas.repository;


import com.example.agendas.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
