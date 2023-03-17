const express = require("express");
const app = express();

//rota padrão
app.get("/", function(req, res){
    res.send("Está é a rota padrão, link do repositorio deste projeto: https://github.com/SamuelCandido/url_shortener");
});








app.listen(8080, function(){
    console.log("Servidor operante na url http://localhost:8081")
});
//localhost para criar a aplicação web