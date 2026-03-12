# Fórum Online -- Frontend

## 📌 Sobre o Projeto

Este projeto corresponde ao **frontend de uma plataforma de fórum
online**, onde utilizadores podem participar em debates através da
criação de tópicos e publicações (posts).

A aplicação permite que utilizadores registados interajam em diferentes
categorias, criem discussões, publiquem comentários e participem em
debates dentro da plataforma.

O sistema também possui funcionalidades administrativas para gestão de
categorias, tópicos e utilizadores.

------------------------------------------------------------------------

# 🚀 Tecnologias Utilizadas

O frontend foi desenvolvido utilizando as seguintes tecnologias:

-   React.js
-   React Router DOM
-   Axios
-   CSS
-   Lucide React (ícones)

------------------------------------------------------------------------

# 📂 Estrutura do Projeto

    src
     ┣ assets
     ┃ ┗ imagens da aplicação
     ┣ components
     ┃ ┣ buttons
     ┃ ┣ inputs
     ┃ ┣ FundoImagem
     ┃ ┗ TopBar
     ┣ pages
     ┃ ┣ Login
     ┃ ┣ Register
     ┃ ┣ Home
     ┃ ┗ Topicos
     ┣ services
     ┃ ┗ api.js
     ┣ styles
     ┃ ┣ main.css
     ┃ ┗ pages
     ┣ App.jsx
     ┗ main.jsx

------------------------------------------------------------------------

# 🔑 Funcionalidades

## 👤 Utilizador

-   Registrar-se na plataforma
-   Fazer login
-   Criar tópicos
-   Visualizar tópicos
-   Fazer posts em tópicos
-   Editar posts
-   Excluir posts
-   Anexar imagens aos posts

## 👑 Administrador

-   Gerenciar categorias
-   Criar categorias
-   Editar categorias
-   Excluir categorias
-   Gerenciar usuários
-   Suspender usuários
-   Banir usuários
-   Remover tópicos

------------------------------------------------------------------------

# 🔐 Autenticação

A autenticação é feita através de **JWT (JSON Web Token)**.

Fluxo:

1.  O utilizador faz login.
2.  O frontend envia os dados para a API.
3.  A API retorna um token JWT.
4.  O token é guardado no **localStorage**.
5.  O token é utilizado para acessar rotas protegidas.

Exemplo:

``` javascript
localStorage.setItem("token", resposta.data.token);
```

------------------------------------------------------------------------

# 🌐 Comunicação com Backend

A comunicação com o backend é feita através do **Axios**.

Arquivo de configuração:

    src/services/api.js

Exemplo de requisição:

``` javascript
const resposta = await api.post("/login", {
  email,
  senha
});
```

------------------------------------------------------------------------

# ▶️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/forum-frontend.git
```

## 2️⃣ Entrar na pasta do projeto

``` bash
cd forum-frontend
```

## 3️⃣ Instalar dependências

``` bash
npm install
```

## 4️⃣ Executar o projeto

``` bash
npm run dev
```

ou

``` bash
npm start
```

------------------------------------------------------------------------

# 🔗 Integração com Backend

Principais rotas da API:

    POST /login
    POST /register
    GET /categorias
    GET /categoria/:idCategoria
    POST /topico
    POST /post
    PUT /post/:id
    DELETE /post/:id

------------------------------------------------------------------------

# 🎯 Objetivo do Projeto

Desenvolver uma **plataforma digital de debates online**, permitindo que
os utilizadores compartilhem opiniões, criem discussões e interajam
dentro de diferentes categorias temáticas.

------------------------------------------------------------------------

# 👩‍💻 Autora

**Inês Jobino**\
Projeto académico de desenvolvimento de sistemas web.
