# Bomboniere API
 
![logoapi](https://user-images.githubusercontent.com/89221267/144911680-00e97979-804d-468b-9c3e-44bc2864f45a.png)

## About the project :wink:
Final project for Resilia Educação's fourth module. This API consists of a movie theater's bomboniere's (snack bar) orders and details from them. :chocolate_bar::lollipop::candy: 

## Technology 
Here are the technologies used in this project.
### ||| ORM with NodeJS - API with Sequelize and MySQL |||

* NodeJS/Express
* Nodemon
* JavaScript
* Sequelize
* MySQL

## How to use 
```
# Clone this repository
$ git clone https://github.com/reisluana/API.git

# Go into the project directory

# Install dependencies
$ npm install

# Run the server
$ npm start
```
Project entry point: 
> ./api/index.js <br>
Routes entry point: 
> ./api/routes/index.js

Database: bomboniere<br>
Table: Pedidos

## Available Routes 
```
GET - find all orders: http://localhost:3000/bomboniere
GET - find one order: http://localhost:3000/bomboniere/:id
POST - create/save a new order: http://localhost:3000/bomboniere
PUT - update a order: http://localhost:3000/bomboniere/:id
DELETE - delete a order: http://localhost:3000/bomboniere/:id
```
Important: pedido(s) = order(s)

## Versioning
1.0.0

## Author :woman_technologist:
Luana Reis 
You can contact me via email (reisluanag@gmail.com) :e-mail: <br>

Thanks for visiting me and good coding! :sparkling_heart:
