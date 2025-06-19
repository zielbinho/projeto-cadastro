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
    MySQL: Banco de dados relacional para armazenamento dos dados.
    Nodemon: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
    CORS: Middleware para permitir requisições de diferentes origens.

Frontend (Cliente):

    React: Biblioteca para construção de interfaces de usuário.
    Axios: Cliente HTTP para realizar as requisições à API.
    React Router Dom: Para o gerenciamento de rotas da aplicação.
    Bootstrap: Framework de CSS para estilização dos componentes.

Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

    Node.js
    NPM ou Yarn
    MySQL

Instalação e Configuração

    Clone o repositório:
    Bash

git clone https://github.com/zielbinho/projeto-cadastro.git

Configure o Backend:

    Navegue até o diretório da API:
    Bash

cd projeto-cadastro/api

Instale as dependências:
Bash

    npm install

    Configure o Banco de Dados:
        Crie um banco de dados no seu servidor MySQL.
        Renomeie o arquivo .env.example para .env (este arquivo não está no projeto, mas é uma boa prática).
        Adicione as suas credenciais do MySQL no arquivo .env ou diretamente no código, no arquivo api/db.js.

        DB_HOST=localhost
        DB_USER=seu_usuario
        DB_PASSWORD=sua_senha
        DB_DATABASE=seu_banco_de_dados

Configure o Frontend:

    Navegue até o diretório do cliente:
    Bash

cd ../cliente

Instale as dependências:
Bash

        npm install

Executando a Aplicação

    Inicie o Backend:
        A partir da pasta api, execute o comando:
        Bash

    npm start

    O servidor estará em execução em http://localhost:8800.

Inicie o Frontend:

    A partir da pasta cliente, execute o comando:
    Bash

        npm start

        A aplicação estará disponível em http://localhost:3000.

Endpoints da API

A API expõe os seguintes endpoints:

    GET /: Retorna a lista de todos os usuários.
    POST /: Adiciona um novo usuário.
    PUT /:id: Atualiza um usuário existente.
    DELETE /:id: Deleta um usuário.

