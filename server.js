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

//Rota home page
app.get("/", async function (req, res) {
        const shortUrls = await ShortUrl.find()
        res.render('index', { shortUrls: shortUrls });
})

//Sincronizando, esperar concluir em segundo plano para continuar
app.post('/shortUrls', async function(req, res){
    await ShortUrl.create({ full: req.body.fullUrl})
    res.redirect('/')
})

app.get('/:shortUrl', async function(req, res){
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    
    shortUrl.save()
      
    res.redirect(shortUrl.full)
})

router

app.listen(process.env.PORT || 5000, function(){
    console.log("Servidor operante na porta 5000")
});
