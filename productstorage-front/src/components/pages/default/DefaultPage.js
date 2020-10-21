import React from 'react';
import Header from '../../header/Header';
import { Main }from './styles/default';



export default function DefaultPage({children}){


    
    return(
        <div>
            <Header/>
            <Main>
                {children}
            </Main>
        </div>
    );
    
}