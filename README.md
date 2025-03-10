# Teste Técnico Front-end BeTalent

Este é um repositório para Testes Técnicos em Front-end da BeTalent. Ele é destinado a pessoas que participam de nossos processos seletivos.

## Sobre o Projeto

O projeto consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, utilizando json-server. A tabela exibe informações sobre funcionários, incluindo imagem, nome, cargo, data de admissão e telefone. Também é possível realizar pesquisas na tabela por meio de um input, filtrando dados por cargo, nome e telefone.

## Pré-requisitos

Para rodar este projeto, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Instruções para Rodar a Aplicação

1. Clone este repositório em sua máquina:
    ```sh
    git clone https://github.com/BeMobile/desafio-front-end
    ```

2. Entre na pasta do projeto:
    ```sh
    cd desafio-front-end
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install
    ```

4. Inicie o json-server para consumir a API simulada:
    ```sh
    npx json-server db.json
    ```

5. Em outro terminal, inicie a aplicação:
    ```sh
    npm run dev
    ```

6. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## Critérios de Avaliação

Em ordem de relevância, avaliaremos:

1. Lógica de programação;
2. Organização (do código e dos arquivos);
3. CSS do projeto;
4. README, que deve conter, pelo menos, as seguintes informações: sobre o projeto, pré-requisitos e instruções para rodar a aplicação.

É um diferencial na avaliação o uso de TypeScript.

## Envio da Solução

O projeto deverá ser hospedado em um repositório no seu GitHub. O link do repositório deverá ser fornecido por meio do formulário de Teste Técnico encaminhado ao seu e-mail. Não serão aceitos links de projetos enviados por outros meios.

Demais instruções e regras serão instruídas nos formulários e nas comunicações do processo seletivo do qual você está participando.
