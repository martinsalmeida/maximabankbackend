<h1 align="center">
  <img  alt="MaximaBank" src = "https://user-images.githubusercontent.com/42298239/177552606-f319b543-a080-4530-8019-3daaff1ee367.svg")
/>
  <br>
  Desafio MaximaBank
  <h3 align="center">Aplicação conta bancária</h3>
  <br>
</h1>

## :rocket: Tecnologias

Projeto desenvolvido utilizando as seguintes tecnologias:

- React
- Typescript
- ContextApi
- Styled-componentes
- Prisma
- Express
- JWT


## :clipboard: O Desafio da Aplicação

Aplicação Simulando uma conta bancária.

O Desafio consistia em escrever uma Aplicação FrontEnd em React e BankEnd em NodeJS simulando uma conta bancária:



## :information_source: Como utilizar a aplicação

Para clonar e rodar a aplicação, você precisará do [Git](https://git-scm.com), Node.js v16.16 ou superior + Npm v8.1;


```bash

FrontEnd
# Clone este repositório
$ git clone https://github.com/martinsalmeida/maximabankfrontend.git

# Entre no repositório maximabankfrontend e instale as dependências
$ cd maximabankfrontend
$ npm install

# Para rodar o localmente:
$ npm start

# Acesse o endereço:
$ http://localhost:3000


BackEnd
# Clone este repositório
$ git clone https://github.com/martinsalmeida/maximabankbackend.git

# Entre no repositório maximabankbackend e instale as dependências
$ cd maximabankbackend
$ npm install

# É necessário alterar no arquivo .env as credencias no banco Postgres
DATABASE_URL="postgresql://NOMEDOUSUARIO:SENHADOBANDO@localhost:5432/NOMEDOBANCO?schema=public"

# Rode as migrations do Prisma ORM para gerar as tabelas 
$ npx prisma migrate dev

# Para rodar localmente o backend:
$ npm run dev

```
