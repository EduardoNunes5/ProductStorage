import React from 'react';
import {Link} from 'react-router-dom';
import { Border, MenuHeader, MenuList } from './styles';



export default function Menu(props){
    return(
            <MenuList>
                { props.mobile &&
                        <MenuHeader>
                            <span>{props.menuTitle}</span>
                            <Border/>
                        </MenuHeader>
                }
                <ul>
                    <li>
                        <Link to="/" onClick={props.closeMenu}>
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/cadastro/produtos" onClick={props.closeMenu}>
                            Adicionar Produto
                        </Link>
                    </li>
                    

                </ul>
            </MenuList>
    )
}