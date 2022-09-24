<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/nlw-esports/blob/master/web/src/assets/logo-nlw-esports.svg" /></td>
    <td><h1>NLW-ESPORTS</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o NLW eSports, promovido pela Rocketseat.<br />
Durante o evento, foram desenvolvidas 3 aplicações, uma API em Node, uma aplicação React com Vite e um App em React Native.<br />
A aplicação web exibe os jogos cadastrados na API e permite adicionar um anúncio de busca de jogador. A aplicação mobile faz a mesma coisa.<br />
<br />
>Foram feitas melhorias na aplicação original, a saber: carrossel responsivo de imagens na aplicação React e autenticação com Discord na aplicação mobile.
<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Express__ + __Cors__
  * __Prisma ORM__ com SQLite
* Front-end
  * __React + Vite + Typescript__
  * __TailwindCSS__ para estilização.
  * __Radix-UI__ para fazer a tela de modal e Checkbox.
  * __Phosphor-react__ para exibir ícones.
  * __Keen-Slider__ para fazer o carrossel de imagens.
  * Acesso à API com __Axios__
* Mobile
  * __Expo-Auth-Session__ para autenticação no Discord.
  * __Expo-Clipboard__ para copiar texto.
  * __Phosphor-react-native__ para exibir ícones.
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/luiizsilverio/nlw-esports
```
* Back-end
```bash
$ cd server
$ npm install
$ npm run dev
```
* Front-end
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```
* Mobile
  * Renomeie o arquivo env (renomear).ts para env.ts
  * Informe a URL da API e a URL do Discord
```bash
$ cd ..
$ cd mobile
$ npm install
$ expo start
```

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/nlw-esports/blob/master/web/src/assets/nlw-esports.gif)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
