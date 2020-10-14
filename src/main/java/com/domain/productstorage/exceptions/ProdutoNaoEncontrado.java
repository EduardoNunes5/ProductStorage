package com.domain.productstorage.exceptions;

public class ProdutoNaoEncontrado extends RuntimeException{

    public ProdutoNaoEncontrado(String msg){
        super(msg);
    }
}
