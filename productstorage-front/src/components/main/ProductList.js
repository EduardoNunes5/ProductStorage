import React, { useEffect, useState } from 'react';
import api from '../../api';
import { ProductUl} from './styles/index';
import { ProductInfo } from './styles';
import { Link } from 'react-router-dom';
import { Button, PortraitImage } from '../pages/default/styles/default';
import { ButtonContainer} from '../pages/styles/index';
import  Loading from '../loading/Loading';
import { Toast }from '../toast/Toast';

export default function Home(props){

    const [products, setProducts] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [toast, setToast] = useState({msg: '', toastType: '', show: false});
    const [lastUpdate, setLastUpdate] = useState(new Date());

    const getProducts = async () => {
        const prods = await api.get('produtos');
        return prods.data;       
    }

    useEffect(() =>{
        let isMounted = true;
        getProducts().then(produtos => {
            if(isMounted){
                setProducts(produtos)
                setShowLoading(false);
            }
        })
        .catch(erro => {
            setShowLoading(false);
        })     
        return () => isMounted = false;
    },[lastUpdate])

    const removeProduct = async (id) => {
        try{
            const deletedProd = await api.delete(`produtos/${id}`);
            setProducts(products.filter(product => product.id !== deletedProd.id));
            setToast({msg: 'Produto removido', toastType: 'danger', show: true})
            setTimeout(()=> setToast({show:false}),3000);
            setLastUpdate(new Date());
            
        }
        catch(err){
            const response = err.response;
            setToast({msg: `${response.data.erro}`, toastType: 'danger', show: true})
            setTimeout(()=> setToast({show:false}),3000);
        }
    }

    const defaultSrc = (e)=>{
        e.target.onerror = null;
        e.target.src = './images/no-image.png';
    }

    return(
        <>
            {
                showLoading &&
               <Loading/>
            }
            {
                products &&
                <ProductUl>
                    {products.map((prod) => 
                        <li key={prod.id}>
                            <ProductInfo>
                                <Link to={`produtos/${prod.id}`}>
                                    <PortraitImage onError={defaultSrc} src={ prod.urlImagem ? prod.urlImagem : "./images/no-image.png"} alt="no img"></PortraitImage>
                                </Link>
                                <p>{prod.nome}</p>
                                <p>R$ {prod.preco.toFixed(2)}</p>
                                <ButtonContainer>
                                    <Button warning> <Link to = {`edicao/produtos/${prod.id}`} >Editar</Link>
                                    </Button>
                                    <Button danger onClick={()=>removeProduct(prod.id)}>Remover</Button>
                                </ButtonContainer>
                            </ProductInfo>                         
                        </li>)
                    }
                </ProductUl>
            }
            {
                !showLoading && products.length === 0
                &&
                <h1 style={{textAlign: 'center', color:'rgba(38,119,4,1)'}}>Vazio :'(</h1>

            }
            {
                toast.show &&
                <Toast {...toast}/>
            }
            {
                console.log('rendering;')
            }
            
        </>
    )

}