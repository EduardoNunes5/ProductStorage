import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';
import { ButtonContainer} from './styles';
import { DetailsContainer } from './styles/index';
import { Link } from 'react-router-dom';
import { Button, PortraitImage } from './default/styles/default';

export function ProductDetails(props){
    const {id} = useParams();

    const [details, setDetails] = useState({ nome: '', descricao: '', preco: 0.0, urlImagem: ''});

    useEffect(()=>{
        api.get(`produtos/${id}`)
        .then(response => response.data)
        .then(data => setDetails(data))
    },[id])

    const defaultSrc = (e)=>{
        e.target.onerror = null;
        e.target.src = '/images/no-image.png';
    }

    return (
        <>
            <DetailsContainer>
                <PortraitImage onError={defaultSrc}src={details.urlImagem ? details.urlImagem : "/images/no-image.png" } alt="no img"></PortraitImage>
                <div>
                    <p><strong>Nome</strong>: {details.nome}</p>
                    <p><strong>Descrição</strong>: {details.descricao}</p>
                    <p><strong>Preço</strong>: R$ {details.preco.toFixed(2)}</p>

                    <ButtonContainer>
                        <Button warning> <Link to = {`../edicao/produtos/${id}`}>Editar</Link></Button>
                        <Button> <Link to = {'/'}>Inicio</Link></Button>
                    </ButtonContainer>
                </div>
            </DetailsContainer>
        </>
    )

}