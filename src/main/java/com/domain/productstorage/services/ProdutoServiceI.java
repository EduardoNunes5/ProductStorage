package com.domain.productstorage.services;

import com.domain.productstorage.entity.Produto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProdutoServiceI {

    Produto insert(Produto produto);

    List<Produto> findAll();
}
