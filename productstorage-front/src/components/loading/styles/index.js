import styled from "styled-components";


export const LoadingContainer = styled.div`

    display:flex;
    justify-content: center;
    margin-top: 5em;


    #loading{
        width: 150px;
        height: 150px;
        border: 1em solid #267704;
        border-top: 1em solid rgba(193,255,191,1);
        border-radius: 50%;
        animation: spin 2s ease-out infinite;
    }


    @keyframes spin{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }


`;
