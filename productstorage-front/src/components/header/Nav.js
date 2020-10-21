import React, { useEffect, useState } from 'react';
import { ExternalMenuBar, Border , Navigator } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import Search from './searchBar/Search';


export default function Nav(){

    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = ()=> {
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener('resize', handleWindowSizeChange);
        return() => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    })



    return (
        <>
        <Navigator> 
            {width < 720 &&
                <FontAwesomeIcon className="Flex_End" icon={faBars} onClick = { ()=> setShowMenu(!showMenu)}/>
            }
            {
                showMenu && width < 720 &&
                <ExternalMenuBar onClick={()=>setShowMenu(false)}></ExternalMenuBar>
            }
            
            {
                showMenu && width < 720 &&
                <Menu mobile={true} menuTitle="Menu" closeMenu={()=>setShowMenu(false)} />
            }
            {
                width > 720 && <Menu/>
            }
            <Search></Search>
        </Navigator>
        <Border/>
        </>
            
    );
}