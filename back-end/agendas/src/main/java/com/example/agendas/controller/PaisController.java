package com.example.agendas.controller;
import com.example.agendas.model.Pais;
import com.example.agendas.repository.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/pais")
public class PaisController {
    @Autowired
    private PaisRepository paisRepository;
    @GetMapping
    public List<Pais> listarPais() {
        return paisRepository.findAll();
    }
    @PostMapping
    public Pais criarPais(@RequestBody Pais pais) {
        return paisRepository.save(pais);
    }
     @DeleteMapping("/{cpf}")
    public ResponseEntity<String> deletarPais(@PathVariable Long cpf) {
        if (paisRepository.existsById(cpf)) {
            paisRepository.deleteById(cpf);
            return ResponseEntity.ok("Pai ou mae deletado(a) com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Pais> atualizarPais(@PathVariable Long cpf, @RequestBody Pais paisAtualizado) {
        if (paisRepository.existsById(cpf)) {
            Pais pais = paisRepository.findById(cpf).get();
            pais.setCpf(paisAtualizado.getCpf());
            pais.setNome(paisAtualizado.getNome());
            pais.setFilho(paisAtualizado.getFilho());

            Pais paisAtualizadoBD = paisRepository.save(pais);
            return ResponseEntity.ok(paisAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
