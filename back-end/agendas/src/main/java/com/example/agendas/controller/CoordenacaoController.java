package com.example.agendas.controller;
import com.example.agendas.model.Coordenacao;
import com.example.agendas.repository.CoordenacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/coordenacao")
public class CoordenacaoController {
    @Autowired
    private CoordenacaoRepository coordenacaoRepository;
    @GetMapping
    public List<Coordenacao> listarCoordenadores() {
        return coordenacaoRepository.findAll();
    }
    @PostMapping
    public Coordenacao criarCoordenador(@RequestBody Coordenacao coordenacao) {
        return coordenacaoRepository.save(coordenacao);
    }
     @DeleteMapping("/{cpf}")
    public ResponseEntity<String> deletarCoordenador(@PathVariable Long cpf) {
        if (coordenacaoRepository.existsById(cpf)) {
            coordenacaoRepository.deleteById(cpf);
            return ResponseEntity.ok("Coordenador(a) deletado(a) com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Coordenacao> atualizarCoordenacao(@PathVariable Long cpf, @RequestBody Coordenacao coordenadorAtualizado) {
        if (coordenacaoRepository.existsById(cpf)) {
            Coordenacao coordenacao = coordenacaoRepository.findById(cpf).get();
            coordenacao.setCpf(coordenadorAtualizado.getCpf());
            coordenacao.setNome(coordenadorAtualizado.getNome());

            Coordenacao coordenadorAtualizadoBD = coordenacaoRepository.save(coordenacao);
            return ResponseEntity.ok(coordenadorAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}