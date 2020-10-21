import styled from 'styled-components';


export const ToastContainer = styled.div`

    position:fixed;
    z-index: 10;
    top: 12px;
    right: 12px;  
    background: ${props =>{
        const type = props.toastType;
        if (type === 'danger') return "#dc3545"
        if (type === 'success') return "#28a745"
        if (type === 'warning') return "#ffc107"
        }
    };


    color: white;
    font-weight: bold;

    width: 220px;
    height: 100px;
    border-radius: 1.5em;
    padding: 2em;


    animation: rightLeft 1.5s ease-out normal;


    @keyframes rightLeft{
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
    }
`;