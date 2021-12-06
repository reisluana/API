//const bodyParser = require('body-parser')
const pedidos = require('./pedidosRoute')
const express = require('express')

module.exports = app => {
    //app.use(bodyParser.json())
    app.use(express.json())
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
    });
    
    app.use(pedidos)
}