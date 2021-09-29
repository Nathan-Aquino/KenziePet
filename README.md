# Kenzie pet
Um sistema de cadastro de animais para o seu PetShop!

## Utilização
Utilize o sistema com algum programa de requisições HTTP. Recomendamos o [Insomnia](https://insomnia.rest/download).

## Rotas

**GET /api/animals/**
Rota responsável por retornar todos os animais cadastrados.

    RESPONSE STATUS -> HTTP 200 (ok)
    
  ```json
[
	{
      "id": 1,
      "name": "Nico",
      "age": 1.0,
      "weight": 30.0,
      "sex": "macho",
      "group": {
        "id": 1,
        "name": "cao",
        "scientific_name": "canis familiaris"
      },
      "characteristc": [
	      {
	        "id": 4,
	        "name": "pelos curtos"
	      },
	      {
	        "id": 3,
	        "name": "pequeno porte"
	     }
		]
	}
]
```

**GET /api/animals/`<int:animal_id>`/**
Rota que retorna o animal especificado pelo **id** passado.

    RESPONSE STATUS -> HTTP 200 (ok)

```json
{
  "id": 2,
  "name": "Bidu",
  "age": 1.0,
  "weight": 30.0,
  "sex": "macho",
  "group": {
    "id": 1,
    "name": "cao",
    "scientific_name": "canis familiaris"
  },
  "characteristic_set": [
    {
      "id": 1,
      "characteristic": "peludo"
    },
    {
      "id": 2,
      "characteristic": "medio porte"
    }
  ]
}
```
**POST /api/animals/**
Rota responsável por cadastrar os animais.

    RESPONSE STATUS -> HTTP 201 (created)

Body:
```json
{
  "name": "Bidu",
  "age": 2,
  "weight": 30,
  "sex": "macho",
  "group": {
    "name": "cao",
    "scientific_name": "canis familiaris"
  },
  "characteristic_set": [
    {
      "characteristic": "peludo"
    },
    {
      "characteristic": "medio porte"
    }
  ]
}
```
Response:

```json
{
  "id": 2,
  "name": "Bidu",
  "age": 1.0,
  "weight": 30.0,
  "sex": "macho",
  "group": {
    "id": 1,
    "name": "cao",
    "scientific_name": "canis familiaris"
  },
  "characteristic_set": [
    {
      "id": 1,
      "characteristic": "peludo"
    },
    {
      "id": 2,
      "characteristic": "medio porte"
    }
  ]
}
```
**DELETE /api/animals/`<int:animal_id>`/**
Rota para a deleção de um animal especificado pelo **id** passado.

    RESPONSE STATUS -> HTTP 204 (no content)
  
  **POST /api/user**
Rota para criação de usuário e definição se o mesmo irá ser administrador do sistema

```json
{
	"username":"Peter",
	"password":"12345678",
	"is_superuser":true
}
```
Response:
```json
{
	"id":1,
	"username":Peter
}
```

**POST /api/login**
Rota para login do usuário no sistema, retornando um JSON web Token para autenticação e verificação das permissões.
```json
{
	"username":"Nathan",
	"password":"12345678"
}
```
Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYXRoYW4iLCJpYXQiOjE2MzI3ODQ5NzN9.qMu1iM0OczTlVqXyHjujxqSNblksL42G7rapVNPVC0E"
}
```

## Observação
Apenas administradores do sistema conseguem cadastra animais ou deletar.



## Tecnologias utilizadas

 - Node.JS
 - Express
 - Express-Validator
 - Passport.JS
 - Passport-jwt
 - TypeORM
 - SQLite
 - Typescript
 - Javascript

