package com.example.agendas.controller;
import com.example.agendas.model.Solicitacao;
import com.example.agendas.repository.SolicitacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/solicitacao")
public class SolicitacaoController {
    @Autowired
    private SolicitacaoRepository solicitacaoRepository;
    @GetMapping
    public List<Solicitacao> listarSolicitacoes() {
        return solicitacaoRepository.findAll();
    }
    @PostMapping
    public Solicitacao criarSolicitacao(@RequestBody Solicitacao solicitacao) {
        return solicitacaoRepository.save(solicitacao);
    }
     @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarSolicitacao(@PathVariable Long id) {
        if (solicitacaoRepository.existsById(id)) {
            solicitacaoRepository.deleteById(id);
            return ResponseEntity.ok("Solicitacao deletada com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Solicitacao> atualizarSolicitacao(@PathVariable Long id, @RequestBody Solicitacao solicitacaoAtualizado) {
        if (solicitacaoRepository.existsById(id)) {
            Solicitacao solicitacao = solicitacaoRepository.findById(id).get();
            solicitacao.setId(solicitacaoAtualizado.getId());
            solicitacao.setDescricao(solicitacaoAtualizado.getDescricao());
            solicitacao.setHorario(solicitacaoAtualizado.getHorario());
            solicitacao.setStatus(solicitacaoAtualizado.getStatus());

            Solicitacao solicitacaoAtualizadoBD = solicitacaoRepository.save(solicitacao);
            return ResponseEntity.ok(solicitacaoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
