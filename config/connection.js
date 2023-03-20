const mongoose =  require('mongoose');

function connection(){
    let usuario = process.env.NODE_USER
    let senha = process.env.NODE_PASS

    //String (NODE_ENV) que vai dizer se estamos em produção ou omologação
    if (process.env.NODE_ENV !== 'producao'){
        require('dotenv').config();
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    }
    //Se não utilizamos as variaveis de produção
    else{
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    }
    const URL = `mongodb+srv://${usuario}:${senha}@cluster0.v0tualh.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(URL);
   
    const db = mongoose.connection;
    db.on('error', function(){
        console.log('Erro de conecxão!')
    });

    db.on('open', function(){
        console.log('Banco de dados conectado!')
    });

};

connection()