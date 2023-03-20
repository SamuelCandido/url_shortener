const express = require('express');
const mongoose =  require('mongoose');
const ShortUrl = require('./models/shortUrl');
const connection = require('./config/connection')
const app = express();


//
app.set('view engine', 'ejs')

//Aviso de parametro URL
app.use(express.urlencoded({extended: false}))

//Rotas:
//Rota padrão
app.get("/", function(req, res){
    res.send("Está é a rota padrão, link do repositório deste projeto: https://github.com/SamuelCandido/url_shortener");
})

//Rota home page
app.get("/home", async function (req, res) {
        const shortUrls = await ShortUrl.find()
        res.render('index', { shortUrls: shortUrls });
    })

//Sincronizando, esperar concluir para continuar
app.post('/shortUrls', async function(req, res){
    await ShortUrl.create({full: req.body.fullUrl})
    res.redirect('/home')
})


app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor operante na porta 5000")
});
