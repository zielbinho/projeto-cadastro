Projeto de Cadastro de Usuários

Este é um projeto full-stack de cadastro de usuários, com um backend em Node.js e um frontend em React.
Descrição

O projeto consiste em uma aplicação web simples que permite o cadastro e a listagem de usuários. O backend é uma API RESTful que se conecta a um banco de dados MySQL para persistir os dados, e o frontend é uma interface de usuário reativa construída com React para interagir com a API.
Funcionalidades

    Cadastrar novos usuários com nome, email e telefone.
    Listar todos os usuários cadastrados.
    Interface amigável e responsiva.

Tecnologias Utilizadas

Backend (API):

    Node.js: Ambiente de execução do JavaScript no servidor.
    Express: Framework para construção da API.
    Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
    CORS: Middleware para permitir requisições de diferentes origens.

Frontend (Cliente):

    React: Biblioteca para construção de interfaces de usuário.
    Axios: Cliente HTTP para realizar as requisições à API.
    React Router Dom: Para o gerenciamento de rotas da aplicação.
    Bootstrap: Framework de CSS para estilização dos componentes.

Endpoints da API

A API expõe os seguintes endpoints:

    GET /: Retorna a lista de todos os usuários.
    POST /: Adiciona um novo usuário.

