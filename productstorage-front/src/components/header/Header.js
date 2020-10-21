import React from 'react';
import Nav from './Nav';
import { Head, Title } from './styles';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <Head>
            <Title> <Link to="/">Estoque de Produtos</Link></Title>  
            <Nav/>
        </Head>
    )
}

export default Header;