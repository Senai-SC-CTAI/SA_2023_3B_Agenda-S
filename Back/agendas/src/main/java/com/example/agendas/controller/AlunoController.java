package com.example.agendas.controller;
import com.example.agendas.model.Aluno;
import com.example.agendas.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.http.ResponseEntity;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoRepository alunoRepository;
    @GetMapping
    public List<Aluno> listarAlunos() {
        return alunoRepository.findAll();
    }
    @PostMapping
    public Aluno criarAluno(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }
     @DeleteMapping("/{matricula}")
    public ResponseEntity<String> deletarAluno(@PathVariable Long matricula) {
        if (alunoRepository.existsById(matricula)) {
            alunoRepository.deleteById(matricula);
            return ResponseEntity.ok("Aluno(a) deletado(a) com sucesso.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{matricula}")
    public ResponseEntity<Aluno> atualizarAluno(@PathVariable Long matricula, @RequestBody Aluno alunoAtualizado) {
        if (alunoRepository.existsById(matricula)) {
            Aluno aluno = alunoRepository.findById(matricula).get();
            aluno.setMatricula(alunoAtualizado.getMatricula());
            aluno.setNome(alunoAtualizado.getNome());
            aluno.setTurma(alunoAtualizado.getTurma());
            aluno.setPais(alunoAtualizado.getPais());
            aluno.setTelefone(alunoAtualizado.getTelefone());

            Aluno alunoAtualizadoBD = alunoRepository.save(aluno);
            return ResponseEntity.ok(alunoAtualizadoBD);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
