package com.domain.productstorage.controller;

import com.domain.productstorage.entity.Produto;
import com.domain.productstorage.services.ProdutoServiceI;
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
}
