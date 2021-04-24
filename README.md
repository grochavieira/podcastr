<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/grochavieira/podcastr?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/grochavieira/podcastr?style=flat">
  
  <a href="https://github.com/grochavieira/podcastr/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/grochavieira/podcastr?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">
  
</p>
<h1 align="center">
    <img src="./.github/logo_podcastr.png" />
</h1>

<h4 align="center"> 
	🎉  Aplicação finalizada! 🎉
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
👉<a href="#-demonstracao" style="text-decoration: none"> Demonstração</a> <br/>
👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#user-content--licença" style="text-decoration: none"> Licença</a>

</p>

## 💻 Sobre o projeto

🎧 Projeto da NLW #05 da Rocketseat, uma aplicação para ouvir podcasts.

<a align="center" target="blank" href="https://podcastr-umber.vercel.app/">
    <img alt="Site podcastr" src="https://img.shields.io/static/v1?label=site&message=podcastr&color=4953B8&style=flat&logo=vercel">
</a>

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] Header da aplicação;
- [x] Player:
  - [x] Tocar música se estiver selecionada;
  - [x] Botão shuffle - para tocar os podcasts de forma aleatória;
  - [x] Botão replay - para dar replay no podcast assim que acabar;
  - [x] Botão next - ir para o próximo podcast;
  - [x] Botão previous - voltar para o podcast anterior;
  - [x] Barra deslizante - pode deslizar na barra para mudar o tempo do podcast.
- [x] Página Home:
  - [x] Listagem dos 2 últimos episódios lançados na plataforma;
  - [x] Lista com todos os demais episódios;
  - [x] Pode tocar o episódio tocando no player ao lado dele.
- [x] Página de Episódio:
  - [x] Descrição e informações adicionais sobre o episódio;
  - [x] Pode tocar o episódio ao pressionar o botão direito de player ao lado da thumbnail;
  - [x] Pode voltar para a tela Home ao pressionar o botão esquerdo ao lado da thumbnail.
- [x] Tema Omni/Dracula;
- [x] Utilização do json-server para consumir uma fake API;
- [x] Utilização de Context para admnistrar o contexto do player.

---

## 🎨 Layout

### Página Home

<div align="center">
    <img width="100%" src="./.github/home_podcastr.png" />
</div>

### Página de Episódio

<div align="center">
    <img width="100%" src="./.github/episode_podcastr.png" />
</div>

---

<a name="-demonstracao"></a>

## 🕹️ Demonstração

<a align="center" target="blank" href="https://www.linkedin.com/posts/grochavieira_nlw05-rocketseat-nextlevelweek-activity-6791727091059691520-pngR">
    <img alt="podcastr" src="https://img.shields.io/static/v1?label=post&message=podcastr&color=0072B1&style=flat&logo=linkedin">
</a>

---

## 🚀 Como executar o projeto

Este projeto contém 2 partes:

1. Frontend
2. Fake-Backend - **[ACESSE AQUI](https://github.com/grochavieira/podcastr-fake-backend)**

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Váriaveis de Ambiente

> Veja o arquivo [.env.sample](https://github.com/grochavieira/podcastr/blob/master/.env.sample)

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/podcastr.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd podcastr

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[next.js](https://nextjs.org/)**
- **[css-Modules](https://github.com/css-modules/css-modules)**
- **[sass](https://sass-lang.com/)**
- **[date-fns](https://github.com/date-fns/date-fns)**
- **[rc-slider](https://www.npmjs.com/package/rc-slider)**
- **[json-server](https://github.com/typicode/json-server)**

> Veja o arquivo [package.json](https://github.com/grochavieira/podcastr/blob/master/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fontes: **[Lexend](https://fonts.google.com/specimen/Lexend)**, **[Inter](https://fonts.google.com/specimen/Inter)**

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
 <img src="https://avatars.githubusercontent.com/u/48029638?s=460&u=40540691957b5aabf04e2e1d4cddf8d3633cb1be&v=4" width="150px;" alt="grochavieira"/>
 <br />
 <sub><strong>🌟 Guilherme Rocha Vieira 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grochavieira/)](https://www.linkedin.com/in/grochavieira/)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Guilherme Rocha Vieira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/grochavieira/)

---
