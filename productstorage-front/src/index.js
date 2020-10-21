import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormProduto from './components/pages/FormProduto';
import Home from './components/pages/Home';
import Header from './components/header/Header';
import { ProductDetails } from './components/pages/ProductDetails';
import NotFound from './components/pages/NotFound';
import Footer from './components/footer/Footer';


ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cadastro/produtos' component={FormProduto}/>
      <Route exact path='/edicao/produtos/:id' component={FormProduto}/>
      <Route exact path='/produtos/:id' component={ProductDetails}/>
      <Route component={NotFound}/>
    </Switch>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);
