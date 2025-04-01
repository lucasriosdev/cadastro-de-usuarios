# Cadastro de Usuários

Este é um projeto completo para cadastro de usuários, desenvolvido utilizando **React**, **JavaScript** e **CSS3** no front-end e **Node.js**, **Express**, **Prisma** e **MongoDB** no back-end. O sistema permite cadastrar, listar e deletar usuários, com integração total ao banco de dados (API).

## 🚀 Tecnologias Utilizadas

### 🔹 **Front-end**
- **React**: Para a interface interativa e responsiva.
- **JavaScript**: Para lógica e funcionalidades.
- **CSS3**: Para estilização.
- **Avatar Placeholder**: Para gerar avatares aleatórios.

### 🔹 **Back-end**
- **Node.js** e **Express**: Para criação da API.
- **Prisma**: Como ORM para gerenciamento do banco de dados.
- **MongoDB**: Como banco de dados.
- **CORS**: Para permitir a comunicação entre front-end e back-end.

## 📌 Funcionalidades

- **Cadastro de usuários** com avatar aleatório.
- **Listagem de usuários** cadastrados.
- **Exclusão de usuários** integrada ao banco de dados.
- **Integração entre front-end e back-end** via API.

## 📸 Imagens do Projeto

![Front-end - Tela](Imagens/imagem01foto.png)

![Front-end - Lista de usuarios](Imagens/imagem02.png)

## 📦 Como Executar o Projeto

### 🔹 **Clonando o Repositório**
git clone <https://github.com/lucasriosdev/cadastro-de-usuarios.git>
cd cadastro-de-usuarios
### 🔹 **Configurando o Back-end**
cd backend
npm install
npx prisma migrate dev
npm start
### 🔹 **Configurando o Front-end**
cd frontend
npm install
npm run dev

