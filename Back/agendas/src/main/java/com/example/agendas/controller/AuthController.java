package com.example.agendas.controller;

import com.example.agendas.model.Usuario;
import com.example.agendas.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = {"http://localhost:5173","http://localhost:19006"})
@RestController
@RequestMapping("/api")
public class AuthController {

 private final UsuarioRepository usuarioRepository;

 @Autowired
 public AuthController(UsuarioRepository usuarioRepository) {
 this.usuarioRepository = usuarioRepository;
 }

 @PostMapping("/login")
 public String login(@RequestBody Usuario usuario) {
 List<Usuario> usuarios = usuarioRepository.findAll();
 for (Usuario u : usuarios) {
 if (u.getEmail().equals(usuario.getEmail()) && u.getPassword().equals(usuario.getPassword())) {
 return "/gerenciamento";
 }
 }
 return "/";
 }
}