const express = require('express');
const app = express();

app.set('view engine', 'ejs')

//rota padrão
app.get("/", function(req, res){
    res.send("Está é a rota padrão, link do repositorio deste projeto: https://github.com/SamuelCandido/url_shortener");
});

app.get("/home", function(req, res){
    res.render('index')
})







app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor operante na porta 5000")
});
//localhost para criar a aplicação web