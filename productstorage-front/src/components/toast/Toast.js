import React from 'react';
import { ToastContainer } from './styles';


export function Toast(props){


    return(
        <>

            <ToastContainer {...props}>
                <span>{props.msg}</span>
            </ToastContainer>
        </>

    )
}