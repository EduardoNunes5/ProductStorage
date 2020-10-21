# Product Storage

Executando o projeto:
1. clone o repositório.
2. Instale as dependências do projeto e execute-o  
2.1 para o frontend: execute no terminal npm i para instalar as dependências do react (na pasta productstorage-front)
2.1.2 npm start para executar o frontend  
2.2 para o backend: execute no terminal o comando mvn spring-boot:run para executar o backend.

---
abra no navegador localhost:3000/ para poder utilizar a interface grafica.  

ROTAS:

POST api/produtos  (adicionar produtos)  
GET  api/produtos  (recuperar produtos)  
GET  api/produtos/{id} (recuperar produto específico)  
GET  api/produtos/?nome={nome} (recuperar produto específico pelo nome)  
DELETE api/produtos/{id} (deletar produto específico pelo id)  
PUT api/produtos/{id} (alterar um produto pelo id)  

Para as requisições de post e put, o seu corpo deve conter um json do formato:  
<code>  
{  
    nome: '',  
    descricao: '',  
    preco: '',  
    urlImagem: ''  
 }
 </code>  
 
 Os campos nome e preço são obrigatórios.