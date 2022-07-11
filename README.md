# Labenu Music Awards 🎵

## Sobre

*Labenu Musical Awards*, o **LAMA** é um festival  com várias bandas famosas para a formatura de turmas da Labenu. O sistema é responsável por gerenciar as bandas criadas, criar e vender ingressos, shows e uma galeria para cada show.


---
##  🔠Conteúdos

<!--ts-->
   * [Sobre](#sobre)
   * [Objetivo do Projeto](#objetivo-do-projeto)
   * [Funcionalidades](#funcionalidades)
   * [Concepção do Projeto](#concepcao-do-projeto)
   * [Rodando o Projeto](#rodando-o-projeto)
   * [Documentação](#documentacao)
   * [Colaboradores](#colaboradores)
<!--te-->


---

##  🎯Objetivo do Projeto

Este é um projeto de Back-end, desenvolvido no bootcamp da Labenu, cujo o principal objetivo é estudar e compreender : Serviços (gerador de id, autenticação e criptografia de senha), arquitetura utilizando a programação orientada a objetos e um código que possa ser testado utilizando o Jest como ferramenta.

---

## 🛠 Tecnologias

Para este projeto eu usei as seguintes tecnologias:

- NodeJs
- Typescript
- Express
- Mysql
- Knex
- UUID
- Bcryptjs
- Jsonwebtoken
- Postman
- Paradigma de orientação a objetos
- Arquitetura em camadas
- Jest
- Git

---

## ✔ Funcionalidades

- Cadastro de Usuário
- Login
- Criação de Banda
- Criação de Show
- Criação de ingressos
- Venda de ingressos
- Pegar uma banda pelo nome ou Id
- Pegar um show pelo Dia
- Pegar a galeria de fotos de um evento


## 💡Concepção do Projeto


Para esse projeto são modelados cinco entidades : **Usuarios, Bandas**, **Shows**, **Ticket** e **Galeria_LAMA**.  Cada um com as seguintes caracteristicas :

→ Usuarios -  id, name (nome), email, password (senha) e a role (responsabilidade) do usuário no sistema;

→ Bandas - id, nome (nome), music_genre (gênero musical) e responsible (o integrante responsável pela banda);

→ Shows - id, week_day (dia da semana: SEXTA, SÁBADO ou DOMINGO), start_time (horário de início), end_time (horário de término) e band_id (id da banda que fará o show).

→ Ticket - id, name (nome), price (preço), event_id (id do evento que o ticket vai vender), qtd (quantidade de ingressos que se queria comprar), solds (quantidade de ingressos vendidos).

→ Galeria_LAMA - id, img_url (url da imagem que se deseja postar) e event_id (id do evento que o a imagem fará parte).

- **Modelagem do Banco de Dados :** ![Untitled](https://user-images.githubusercontent.com/47544503/178166945-dfd6d31e-f535-4ac8-bc5f-e938af03abe9.png)

---

## 🔗Documentação

- **Documentação no Postman:** [LAMA](https://documenter.getpostman.com/view/18676403/UzJJvJ1R)

---

## 🛰Rodando o Projeto

Para rodar o projeto, basta baixar ou clonar o repositório e rodar o comando npm i no terminal na pasta do projeto e todas as depedências serão baixadas para que o projeto possa rodar.

Para Rodar o projeto, siga as seguintes etapas :

<h4>1º | Faça o clone do repo: </h4>

<code>
    git clone https://github.com/future4code/Joy-LAMA4.git
</code>

<br>
<br>

<h4>2º | Instale as dependências: </h4>

<code>
   npm install
</code>

<br>
<br>

<h4>3º | Inicie o servidor: </h4>

<code>
   npm run start
</code>


---

## Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/FIXER3600">
        <img src="https://avatars.githubusercontent.com/u/47544503?v=4" width="100px;" alt="Foto de Guilherme"/><br>
        <sub>
          <b>Guilherme de Oliveira Barros</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mdmath15">
        <img src="https://avatars.githubusercontent.com/u/86062294?v=4" width="100px;" alt="Foto Matheus github"/><br>
        <sub>
          <b>Matheus Lima Ribeiro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

