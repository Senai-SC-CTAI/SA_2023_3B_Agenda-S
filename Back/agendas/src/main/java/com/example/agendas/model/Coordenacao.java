package com.example.agendas.model;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Coordenacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_coordanacao;
    private Long cpf;
    private String nome;

}
