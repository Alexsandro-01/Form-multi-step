# Multi Step Form


https://user-images.githubusercontent.com/73038442/211033430-cefd68c8-6827-43bd-a6df-5cae7a998255.mp4


## Contexto
Encontrei o desafio de criar um formulário com multi steps no site de desafios para front-end [Fontendmentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). O desafio conta com varias imagens do layout que deve ser alcançado, tanto no Desktop quanto no mobile, eu gosto bastante dos desafios que eles disponibilizam na plataforma.

A ideia do projeto é uma aplicação de formulário com multiplos passos para o usuário seguir. É muito chato preencher formulários muito longos e a chance de um usuário desistir é grande. Quebar um formulário em partes menores é uma ótima estratégia para reter o usuário.

### `Caso queira acessar a página da aplicação` [clique aqui](https://alexsandro-01.github.io/Form-multi-step/)

# 
## Principais desafios que encontrei

* O primeiro foi criar inputs do tipo checkbox personalizados, já que eles não aceitam estilização. Contornei isso adicionando uma tag span que alterava a estilização se o checkbox estava marcado ou não, e deixei o checkbox original escondido para apenas o span personalizado estar visível.

* Em segundo foi criar um input do tipo switch. Consegui usando um tutorial do `W3Schools`. Nesse tutorial também aprendi sobre a pseudoclass `:before` e `:after`.

* `Exemplo de switch`

<img width="50%" style="margin: 0 0 25px 25px" src="src/assets/images/switch.gif" alt="Exemplo de switch">

* Ao fazer o deploy no Github pages a página não funcionava. Depois de uma rápida pesquisa, descobri que precisava criar uma variável de ambiente com o endereço onde a página seria servida. 
Quando você roda usando o server de desenvolvimento do webpack ele já coloca essa variável automaticamente com o endereço certo. No caso em que você vá servir os arquivos num servidor seu, é necessário criar essa variável antes de rodar o `npm run build`. Então adicionei um arquivo `.env` com a variável e tudo funcionou corretamente.

```env
  PUBLIC_URL=https://alexsandro-01.github.io/Form-multi-step/
```
# 

## Tecnologias usadas

* `React`
* `Typescript`
* `Css-modules`
* `Git`
* `Github pages`


## Executando a aplicação

1. Fazendo o clone;

```bash
  git clone git@github.com:Alexsandro-01/Form-multi-step.git
``` 

2. Instalando as dependências;

```bash
npm install
``` 

3. Iniciando a aplicação;

```bash
npm start
```

4. Acesse a aplicação no seu browser;

```
http://localhost:3000/
```
