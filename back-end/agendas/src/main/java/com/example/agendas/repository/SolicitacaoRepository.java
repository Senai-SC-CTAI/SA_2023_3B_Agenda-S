package com.example.agendas.repository;


import com.example.agendas.model.Solicitacao;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Long> {
}
