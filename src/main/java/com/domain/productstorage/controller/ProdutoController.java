package com.domain.productstorage.controller;

import com.domain.productstorage.entity.Produto;
import com.domain.productstorage.exceptions.ProdutoNaoEncontrado;
import com.domain.productstorage.services.ProdutoServiceI;
import com.domain.productstorage.util.MensagemErro;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class ProdutoController {

    private ProdutoServiceI produtoService;

    public ProdutoController(ProdutoServiceI produtoService){
        this.produtoService = produtoService;
    }


    @PostMapping(value="/produto")
    public ResponseEntity<?> adicionaProduto(@RequestBody Produto produto){
        return new ResponseEntity<>(this.produtoService.insert(produto), HttpStatus.CREATED);
    }

    @GetMapping(value="/produtos")
    public ResponseEntity<?> getProdutos(){
        return new ResponseEntity<>(this.produtoService.findAll(), HttpStatus.OK);
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
