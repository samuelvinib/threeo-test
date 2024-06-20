# Teste Threeo IT

![Logo Threeo IT](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Tv6XCGZLKt29y-FaVgmKuRlS5XqU0RzCfg&s)

# Descrição

> ## Projeto Calculadora
>
> Descrição: Um projeto de backend em Node.js que implementa operações matemáticas (soma, subtração, multiplicação, divisão) através de uma API REST. A rota de cálculo requer autenticação JWT para acesso.
>
> ## Projeto Frontend - Calculadora em React
>
> Descrição: Um projeto frontend em React que permite ao usuário inserir dois valores e realizar operações matemáticas através da API backend. O resultado é exibido na tela após o cálculo.
>
> ### Empresa: Threeo IT
>

## Tecnologias utilizadas no projeto:

- **Back-end**: Node.js
- **Front-end**: React
- **Autenticação e Autorização**: JWT (Bearer token)
- **Banco de dados**: Mysql (para armazenar usuários e hash de senhas)
- **Containers**: Docker e Docker-Compose

# Instalação do projeto

> - Certifique-se de ter o Docker instalado em sua máquina antes de iniciar.

## Passo 1

Após clonar o projeto em sua máquina local:
```bash
cd threeo-test
```

## Passo 2

Execute o seguinte comando para construir e iniciar os containers do Docker:
```bash
docker-compose up -d --build
```

## Passo 3

Acesse o container da API:
```bash
docker exec -it threeo-test-api sh
```

## Passo 4

Crie as tabelas no banco de dados:
```bash
npx prisma db push
```

<br>
 
<h3 align="center">Agora é só acessar o link abaixo ou clicar <a href="http://localhost:3000" target="_blank">aqui</a> para utilizar o projeto!</h3>

```bash
  http://localhost:3000
```