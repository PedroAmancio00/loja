Projeto da loja feito seguindo as intruções dadas com todos os Get e Post necessários. Foi utilizado NestJs e MongoDb para realização da API.

- [x] Core
- [x] Autenticação
- [x] Cash
- [x] Docker

## Autenticação

| Método  | Token Jwt | Caminho                | Função                   |
| ------  | --------- | ---------------------- | ------------------------ |
| @Post   | Não       | /starstore/user        | Registrar o Usuário      |
| @Patch  | Sim       | /starstore/user/change | Trocar a senha do usuário|
| @Post   | Não       | /starstore/auth/login  | Gerar token JWT          |

Para autenticar é necessário primeiro se registrar através do @Post em http://localhost:3000/starstore/user (como todos começam com http://localhost:3000/, irei omitir o começo em próximos exemplos), vale a pena ressaltar que só pode existir um usuário com um username no servidor, exemplo de corpo:

@Post /starstore/user
```json
{
   "username":"teste",
   "password":"1234"
}
```

Com isso o usuário "teste" será registrado com a senha 1234. Agora para logar no usuário é necessário utilizar do @Post em /starstore/auth/login, com o usuário e uma senha de um usuário ja autenticado, exemplo de corpo:

@Post /starstore/auth/login
```json
{
   "username":"teste",
   "password":"1234"
}
```
Como ja cadastramos esse usuário antes, o sistema gerará um tokem JWT para ser usado nas futuras autenticações que possui 10 minutos de duração, para todas as requisições pedidas no projeto é necessário ter um token JWt válido, caso contrário o pedido será negado.

Por fim, temos o @Patch /starstore/user/change, que também é necessário estar previamente logado, caso contrário, não será possível realizar a troca da senha, além disso o sistema verifica a origem do token JWT e assim não é possível um usuário trocar a senha de outro. Exemplo de corpo para troca de senha, levando um consideração estar utilizando um token JWT válido:

@Patch /starstore/user/change
```json
{
   "username":"teste",
   "password":"123456"
}
```
Agora o usuário "teste" terá a senha "123456", como a senha não está no token JWT, para não divulgar dados sensíveis do usuário, o token será valido após a mudança. Novamente, se no corpo o username fosse diferente de "teste", o sistema negaria a troca.

## Cache

O cache foi utilizado de tal forma que quando realizada uma das operações principais da compra de produtos da loja, os dados armazenado no cache duram 15 segundos antes de serem atualizados, ou seja, se ocorrer alguma mudança no banco de dados, ela só será de fato computada para o usuário após 15 segundos, além disso foi adicionado uma restrição que de que são armazenados no máximo 100 itens no cache, para não ocorrer a sonbrecarga para o cliente. Também foi implementado um sistema de benchmark, que faz o meio do caminho entre a requisição e o sistema, mostrando o Ip do usuário que fez a requisição. o Header, o tempo que demorou do começo da requisição até o sistema devolve-la entre outros.

## Docker

Essa aplicação também foi configurada para a utilização do Docker, então inves de seguir os passos daqui para baixo, pode-se apenas executar que tudo estará configurado.

```bash
sudo docker-compose up
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
