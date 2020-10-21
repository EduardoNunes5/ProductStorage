import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { SearchBarContainer } from './styles';
import { Button } from '../../pages/default/styles/default';
import api from '../../../api';
import { useHistory } from 'react-router-dom';


export default function Search(props){

    const [nome, setNome] = useState('');
    let history = useHistory();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = (await api.get(`produtos/?nome=${nome}`));
            history.push(`/produtos/${response.data.id}`)
        }
        catch(err){
            history.push('/not_found');
        }
    }

    const handleChange = (e)=>{
        setNome(e.target.value);
    }
   

    return(
        <>
            <SearchBarContainer>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="nome"></label>
                    <input type="text" name="nome" id="nome" placeholder="nome do produto" onChange={(e) => handleChange(e)} />
                    <Button sucess type="submit"><FontAwesomeIcon icon={faSearch}>
                    </FontAwesomeIcon></Button>
                </form>
            </SearchBarContainer>
        
        </>

    )
}