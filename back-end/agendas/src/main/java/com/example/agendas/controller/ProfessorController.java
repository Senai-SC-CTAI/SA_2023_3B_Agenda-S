package com.example.agendas.controller;
import com.example.agendas.model.Professor;
import com.example.agendas.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorRepository professorRepository;
    @GetMapping
    public List<Professor> listarProfessores() {
        return professorRepository.findAll();
    }
    @PostMapping
    public Professor criarProfessor(@RequestBody Professor professor) {
        return professorRepository.save(professor);
    }
     @DeleteMapping("/{cpf}")
    public ResponseEntity<String> deletarProfessor(@PathVariable Long cpf) {
        if (professorRepository.existsById(cpf)) {
            professorRepository.deleteById(cpf);
            return ResponseEntity.ok("Professor(a) deletado(a) com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Professor> atualizarProfessor(@PathVariable Long cpf, @RequestBody Professor professorAtualizado) {
        if (professorRepository.existsById(cpf)) {
            Professor professor = professorRepository.findById(cpf).get();
            professor.setCpf(professorAtualizado.getCpf());
            professor.setNome(professorAtualizado.getNome());
            professor.setDisciplina(professorAtualizado.getDisciplina());

            Professor professorAtualizadoBD = professorRepository.save(professor);
            return ResponseEntity.ok(professorAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
