package com.domain.productstorage.services;

import com.domain.productstorage.entity.Produto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProdutoServiceI {

    Produto insert(Produto produto);

    List<Produto> findAll();

    Produto deletaProduto(Long id);

    Produto atualizaProduto(long id, Produto produto);

    Produto findById(long id);
}
