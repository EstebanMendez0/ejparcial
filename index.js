const express = require('express');
const app = express();

app.listen('5000', function(){
    console.log("Funcionando")
})

app.use(express.static(__dirname + '/public/'));