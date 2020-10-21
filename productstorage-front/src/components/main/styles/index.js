import styled from 'styled-components';


export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 100%;
        max-height: 100%;
    }
`;

export const ProductUl = styled.ul`

    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    li{
        list-style: none;
        background: white;
        margin: 1.5em auto;
    }

    @media (min-width: 600px){
        display:inline-flex;
        margin: 1.5em 3em;
        justify-content: space-around;
        

        li{
            list-style: none;
            background: white;
            margin: 1.5em 3em;
        }
    }

    @media (min-width: 1200px){
        justify-content: flex-start;
    }

`;
