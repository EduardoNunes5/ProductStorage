import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faHome, faEraser } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';
import { Form, ButtonContainer } from './styles/index';
import { Button } from './default/styles/default';
import { Link } from 'react-router-dom';
import { Toast } from '../toast/Toast';


export default function FormProduto(props){

    const initialState = {nome: '', descricao: '', preco: '', urlImagem: ''}

    const { id } = useParams();
    const [fields, setFields] = useState(initialState);
    const [toast, setToast] = useState({msg: '', toastType: '', show: false});

    useEffect(()=>{
        const state = {cancel: false};
        if(id){
            getProductById(id, state)
         }
  
        return () => state.cancel = true;         
    },[id])

    const getProductById = async (id, state) => {
        const prod = await (await api.get(`produtos/${id}`)).data;
        if(state.cancel) return;
        setFields(prod);
    }


    const handleChange = (e)=>{
        setFields({
            ...fields,
           [e.target.name]: e.target.value
        });
    }

    const handleAddProduct = async (e)=>{
        e.preventDefault();
        const product = {
            nome :fields.nome,
            descricao: fields.descricao,
            preco: fields.preco,
            urlImagem: fields.urlImagem
        }
        try{
            await api.post("produtos", product);
            setToast({msg:'Produto adicionado com sucesso', toastType:'success', show: true});
            setTimeout(()=> setToast({show:false}),3000);
            clearState();
        }
        catch(err){
            setToast({msg: `${err.response}`, toastType:'danger', show: true});
            setTimeout(()=> setToast({show:false}),3000);
        }
    }

    const handleUpdateProduct = async (e)=>{
        e.preventDefault();
        const product = {
            nome :fields.nome,
            descricao: fields.descricao,
            preco: fields.preco,
            urlImagem: fields.urlImagem
        }

        try{
            await api.put(`produtos/${id}`, product);
            setToast({msg:'Produto atualizado com sucesso', toastType:'success', show: true});
            setTimeout(()=> setToast({show:false}),3000);
            clearState();
        }
        catch(err){
            setToast({msg: `${err.response}`, toastType:'danger', show: true});
            setTimeout(()=> setToast({show:false}),3000);
            
        }

    }

    const clearState = ()=>{
        setFields(initialState)
    }


    return(
        <>
            <Form onSubmit={ id ? handleUpdateProduct : handleAddProduct} autoComplete="off">
                <label htmlFor="nome">Nome</label>
                <input required type="text" placeholder="nome do produto..." name="nome" id="nome" value={fields.nome} onChange={(e) => handleChange(e)}/>
                <label htmlFor="urlImagem">Link imagem</label>
                <input type="text" placeholder="link da imagem..." name="urlImagem" id="urlImagem" value={fields.urlImagem} onChange={(e) => handleChange(e)}/>
                <label htmlFor="descricao">Descrição</label>
                <textarea type="text" placeholder="descricao do produto..." name="descricao" id="descricao" value={fields.descricao} onChange={(e) => handleChange(e)}/>
                <label htmlFor="preco">Preço</label>
                <input required type="number" step = "0.01" min="0" placeholder="preco do produto..." name="preco" id="preco" value={fields.preco} onChange={(e) => handleChange(e)}/>
                    
                <ButtonContainer>
                    <Button success type="submit"> <FontAwesomeIcon className="Icon" icon={ id ? faEdit : faSave} />
                    {id ? "atualizar" : "adicionar"}</Button>
                    <Button danger type="button" onClick = {clearState}> <FontAwesomeIcon className="Icon" icon={ faEraser} />
                    limpar</Button>
                    <Button type="button">
                    <Link to = {'/'}><FontAwesomeIcon className="Icon" icon={faHome} /> Início</Link></Button>
                </ButtonContainer>
            </Form>
            {
                toast.show&& 
                <Toast {...toast}/>
            }
            {
                console.log('rendering')
            }
        </>
    )
}