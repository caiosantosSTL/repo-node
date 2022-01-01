const express = require('express')

const app = express()
const port = 3005

app.get('/', function(req, res){
    res.send('ola mundo')
})

app.listen(port, function(){
    console.log(`Rondando na porta ${port}`);
})