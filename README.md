<h1 align="center">
    <img alt="Ignite NodeJS" title="Ignite NodeJS" src="./.github/ignite.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leocairos/ignite-challenge-serverless?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/leocairos/ignite-challenge-serverless">

  <a href="https://github.com//leocairos/ignite-challenge-serverless/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leocairos/ignite-challenge-serverless">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/leocairos/ignite-challenge-serverless/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/leocairos/ignite-challenge-serveless?style=social">
  </a>

  <a href="https://www.linkedin.com/in/leonardo-cairo-54a74756/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue">
  </a>
</p>

# 🚀 Sobre

O Ignite é um programa de aceleração para devs desenvolvido pela [Rocketseat](https://rocketseat.com.br/).


# 💻 Sobre o desafio

Nesse desafio você irá recriar uma parte da API de *todos* que foi desenvolvida no desafio [Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8) mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
As rotas que deverão existir são:

**POST -** `/todos/{userid}`

**GET-** `/todos/{userid}`

### Sobre as rotas

- **POST -** `/todos/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.

    O *todo* deverá ser salvo com os seguintes campos no DynamoDB:

    ```json
    { 
    	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
    	user_id: 'uuid' // id do usuário recebido no pathParameters
    	title: 'Nome da tarefa',
    	done: false, // inicie sempre como false
    	deadline: new Date(deadline)
    }
    ```

- **GET-** `/todos/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).

    A rota deve retornar os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.

# 📅 Entrega

Não é necessário fazer o deploy desse desafio na AWS.

Esse desafio deve ser entregue a partir da plataforma da Rocketseat. Envie o link do repositório que você fez suas alterações. 

## 📝 Licença

Este projeto esta sob a licença MIT.

Feito com ❤️ por [Leonardo Cairo](https://www.linkedin.com/in/leonardo-cairo-54a74756/)!
