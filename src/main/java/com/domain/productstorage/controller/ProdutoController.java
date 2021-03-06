package com.domain.productstorage.controller;

import com.domain.productstorage.entity.Produto;
import com.domain.productstorage.exceptions.ProdutoNaoEncontrado;
import com.domain.productstorage.services.ProdutoServiceI;
import com.domain.productstorage.util.MensagemErro;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("api")
@CrossOrigin
public class ProdutoController {

    private ProdutoServiceI produtoService;

    public ProdutoController(ProdutoServiceI produtoService){
        this.produtoService = produtoService;
    }


    @PostMapping(value="/produtos")
    public ResponseEntity<?> adicionaProduto(@RequestBody Produto produto){
        return new ResponseEntity<>(this.produtoService.insert(produto), HttpStatus.CREATED);
    }

    @GetMapping(value="/produtos")
    public ResponseEntity<?> getProdutos(){
        return new ResponseEntity<>(this.produtoService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/produtos/{id}")
    public ResponseEntity<?> getProduto(@PathVariable("id") long id){
        try{
            return new ResponseEntity<>(this.produtoService.findById(id), HttpStatus.OK);
        }
        catch(ProdutoNaoEncontrado pne){
            return new ResponseEntity<>(new MensagemErro(pne.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value="/produtos/")
    public ResponseEntity<?> getByNome(@RequestParam("nome") String nome){
        try{
            return new ResponseEntity<>(this.produtoService.findByNome(nome), HttpStatus.OK);
        }
        catch(ProdutoNaoEncontrado pne){
            return new ResponseEntity<>(new MensagemErro(pne.getMessage()), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value="/produtos/{id}")
    public ResponseEntity<?> atualizaProduto(@PathVariable("id") long id, @RequestBody Produto produto){
        try{
            return new ResponseEntity<>(this.produtoService.atualizaProduto(id, produto), HttpStatus.OK);
        }
        catch(ProdutoNaoEncontrado pne){
            return new ResponseEntity<>(new MensagemErro(pne.getMessage()), HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping(value="/produtos/{id}")
    public ResponseEntity<?> deletaProduto(@PathVariable("id") Long id){
        try{
            return new ResponseEntity<>(this.produtoService.deletaProduto(id), HttpStatus.OK);
        }
        catch(ProdutoNaoEncontrado pne){
            return new ResponseEntity<>(new MensagemErro(pne.getMessage()), HttpStatus.NOT_FOUND);
        }
    }
}
