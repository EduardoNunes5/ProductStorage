import styled from 'styled-components';

export const Head = styled.header`
    height: 6em;
    display:flex;
    position:sticky;
    flex-wrap: wrap;
    background: rgba(255,250,135,1);
`;

export const Title = styled.h2`
    margin-top: 1em;
    align-self: flex-end;
    text-align: center;
    flex-basis: 100%;

    a{
        text-decoration: none;
        color: rgba(38,119,4,1);
    }
`;

export const Navigator = styled.nav`
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    flex-basis:100%;
    margin-left: .3em;
    margin-right: .3em;
    color: rgba(38,119,4,1);
    font-size: 1.2em;

    }

    .Flex_End{
        align-self: flex-end;
    }
    
`;


export const MenuList = styled.div`

    a{
        text-decoration: none;
        color: rgba(38,119,4,1);
    }


    li{
        list-style: none;
        margin-left: 1em;
    }

    @media(max-width:720px){
        z-index: 5;
        position: fixed;
        background: rgba(255,250,135, .9);
        width: 50%;
        height: 100%;
        box-shadow: 0 0 30px -15px black;
        margin-top: 1em;

        ul{
            margin-top: 1em;
        }
        li{
            margin-bottom:.3em;
        }

    }

    @media (min-width: 721px){
        align-self: flex-end;
        ul{
            display:flex;
        }
        li{
            margin-bottom: 0;
        }
       
    }

`;


export const MenuHeader = styled.span`
    span{
        display:inline-block;
        margin: .5em 0 .5em 1em;
    }

`;

export const ExternalMenuBar = styled.div`
    position:fixed;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    background: rgba(204,191,141,0.8);
    z-index:5;
    animation-name: fadeInOut;
    animation-duration: .8s;


    @keyFrames fadeInOut{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    `;

export const Border = styled.div`
    background-color: rgba(38,119,4,1);
    height: .1em;
    width: 100%;
    align-self: flex-end;
    margin:0;
`;