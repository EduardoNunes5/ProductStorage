package com.domain.productstorage.services;

import com.domain.productstorage.entity.Produto;
import com.domain.productstorage.exceptions.ProdutoNaoEncontrado;
import com.domain.productstorage.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoServiceImpl implements  ProdutoServiceI{

    private final ProdutoRepository produtoRepository;

    public ProdutoServiceImpl(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    @Override
    public Produto insert(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public List<Produto> findAll() {
        return this.produtoRepository.findAll();
    }

    @Override
    public Produto deletaProduto(Long id) throws ProdutoNaoEncontrado{
        Produto produto = this.produtoRepository.findById(id)
                .orElseThrow(()-> new ProdutoNaoEncontrado("Produto com id: "+ id + " não encontrado."));

        this.produtoRepository.delete(produto);
        return produto;
    }

    @Override
    public Produto atualizaProduto(long id, Produto produto) {
        return null;
    }
}
