import styled from 'styled-components';



export const Main = styled.main`
    width: 80%;
    margin: auto;
    height: 100vh;
`;


export const Button = styled.button`
    background: ${props =>{
        if (props.danger) return "#dc3545"
        if (props.success) return "#28a745"
        if (props.warning) return "#ffc107"
        }
    };

    font-weight: bold;

    a {
        text-decoration: none;
        display:block;
        color: black;
        font-weight: bold;
    };
    
    
    border: none;

    border-radius: .5em;

`;

export const PortraitImage = styled.img`
    width: 300px;
    height: 300px;
`;
