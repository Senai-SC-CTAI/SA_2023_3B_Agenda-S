package com.example.agendas.controller;
import com.example.agendas.model.Portaria;
import com.example.agendas.repository.PortariaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/portaria")
public class PortariaController {
    @Autowired
    private PortariaRepository portariaRepository;
    @GetMapping
    public List<Portaria> listarPorteiros() {
        return portariaRepository.findAll();
    }
    @PostMapping
    public Portaria criarPorteiro(@RequestBody Portaria portaria) {
        return portariaRepository.save(portaria);
    }
     @DeleteMapping("/{cpf}")
    public ResponseEntity<String> deletarPorteiro(@PathVariable Long cpf) {
        if (portariaRepository.existsById(cpf)) {
            portariaRepository.deleteById(cpf);
            return ResponseEntity.ok("Porteiro(a) deletado(a) com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Portaria> atualizarPorteiro(@PathVariable Long cpf, @RequestBody Portaria portariaAtualizado) {
        if (portariaRepository.existsById(cpf)) {
            Portaria portaria = portariaRepository.findById(cpf).get();
            portaria.setCpf(portariaAtualizado.getCpf());
            portaria.setNome(portariaAtualizado.getNome());

            Portaria portariaAtualizadoBD = portariaRepository.save(portaria);
            return ResponseEntity.ok(portariaAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
