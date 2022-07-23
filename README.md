<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>
<div align="center" style="margin-bottom: 20px;">
<img alt="demonstração da pagina" src="https://user-images.githubusercontent.com/96503495/167019630-39b34abd-de18-41be-b3e5-6a882e77f8c7.gif" width="auto" heigth="auto"/>
</div>

<div align="center" style="margin: 20px;">
    <p align="center" >
      <a href="#rocket-tecnologias-usadas"> :rocket: Tecnologias Usadas</a> |
      <a href="#zap-executando-o-projeto"> :zap: Executando o Projeto </a> |
      <a href="#open_book-código"> :open_book: Código </a> |
      <a href="#grinning-conclusão"> :grinning: Conclusão </a> |
      <a href="#phone-contatos"> :phone: Contatos </a>
    </p>

</div>

## :barber: O projeto

O objetivo do projeto era construir uma pagina web que servisse como controle de gastos. Nela é possível adicionar despesas e ganhos. Os dados que aparecem na tela são ordenados de acordo com a data, sendo do mais recente para o mais antigo. Os dados podem ser categorizados de acordo com a vontade do usuário, e para cada categoria há uma cor especifica para facilitar a visualização. Também na pagina há a opção de visualizar o balanço mensal:  entradas menos saídas. 

## :rocket: Tecnologias Usadas

O projeto foi feito com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Express](https://www.npmjs.com/package/express)

## :zap: Executando o Projeto
#### Clonando o projeto
```sh
$ git clone git@github.com:orloke/App-Gastos-BackEnd.git
$ cd App-Gastos-BackEnd
```

#### Iniciando o projeto
```sh
$ npm install
$ npm start
```

A parte do banco de dados está hospedado no Heroku. Por questões de segurançã ele não é disponibilizado aqui. Para o devido funcionamento da aplicação é sugerido a criação de um banco de dados no MySql.

#### Pagina Inical

A aplicação possui apenas uma página onde esta todo o cerne do projeto. Para fazer o cadastro de um item é necessário selecionar a categoria, data, valor e colocar um texto descritivo. Em baixo é exibido os itens cadastrados até então. Caso o usuário cometa algum erro no cadastro é possível deletar e fazer novamente. Outra funcionalidade e navegar pelos meses usando as setas que ficam na parte de informações.

## :open_book: Código 

Na construção da pagina tentei novamente, como venho fazendo em outros projetos, separar as responsabilidades, entretanto não fui muito efetivo e nem me dediquei muito a essa parte nesse projeto. Isso pode ser notado no arquivo principal onde além de construir a parte principal do app, também usei para consumir a api. 

Apesar desse descuido o codigo cumpre seu propósito, além de dar origem a uma aplicação responsiva!

## :grinning: Conclusão

O objetivo principal do projeto foi alcançado: criar uma pagina web onde é possível fazer o controle diário de despesas e ganhos. Alguns pontos que podem ser melhorados são: 

* Botão de editar registros
* Opção de adicionar e excluir categorias
* Melhorias no design
* Clean code
* Separar melhor as responsibilidades

## :phone: Contatos

Email: [juniordering@hotmail.com](juniordering@hotmail.com)

WhatsApp [(65) 98175-1036](https://wa.me/5565981751036)
