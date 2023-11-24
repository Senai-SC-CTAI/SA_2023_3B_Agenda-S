package com.example.agendas.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Aluno {
    @Id
    private Long matricula;
    private String nome;
    private String turma;
    private String pais;
    private String telefone;
    private String senha;
}