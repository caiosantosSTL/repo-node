const express = require('express')
const pug = require('pug');

const app = express()
const port = 3005

app.set('view engine', 'pug')

app.get('/', function(req, res){
    res.render('pag')
})

app.listen(port, function(){
    console.log(`Rondando na porta ${port}`);
})