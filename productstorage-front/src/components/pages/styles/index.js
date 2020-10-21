import styled from 'styled-components';


export const Form = styled.form`

    display:flex;
    justify-content: center;
    flex-direction: column;
    padding: 3em;
    background: white;
    color:rgba(38,119,4,1);
    border-radius: 2.5em;
    max-width: 80%;
    margin: 2em auto;


    textarea{
        max-width: 100%;
    }

    .Icon{
        margin-right: .5em;
    }

    input,textarea{
        border-radius: .5em;
        padding: .5em;
    }

    input,textarea{
        border-radius: .5em;
        border: .5px solid green;
        background: rgba(201,235,200,.3);
    }

    input, textarea{
        border: .5px solid green;
    }

    input:focus,textarea:focus{
        outline: none !important;
        border: 2px solid darkgreen;
    }


    @media (max-width: 400px){
        width: 100%;

        input,textarea{
            height: 2em;
            margin-top: .5em;
        }

        label{
            margin-top: .4em;
        }
    }

    @media (min-width:401px){
        margin-top: 3em;
        input,textarea{
            height: 3em;
            margin-top: .5em;
        }

        label{
            margin-top: .5em;
        }
    }

    @media (min-width: 701px){
        width: 60%;
        margin: 3em auto;

    }
`;

export const ButtonContainer = styled.div`
    margin-top: 1em;
    align-self: center;
    display:flex;
    justify-content: space-around;
    width: 100%;
    padding: 1em;

    @media (max-width: 400px){
        width: 80%;
        margin: auto;
        flex-wrap: wrap;
        button{
            flex-basis: 100%;
            margin: .5em 0;
            height: 2em;
        }
    }

    @media (min-width: 401px){
        flex-wrap: nowrap;
        justify-content: space-around;
        button{
            height: 3em;
            flex-basis: 40%;
        }
    }

    @media (min-width: 720px){
        button{
            flex-basis: 25%;
        }
    }
`;


export const DetailsContainer = styled.div`
    width: 80%;
    margin: 2em auto;
    display: flex;
    flex-direction: column;

    img{
        align-self: center;
        margin-bottom: 2em;
    }

    div{
        background: white;
        border-radius: 2.5em;
        padding: 1em;
        min-height: 4em;
    }

    p{
        margin-top: .5em;
    }

    @media (min-width: 720px){
        width: 60%;

        
        div button{
            max-width: 20%;
        }
    }

`;
