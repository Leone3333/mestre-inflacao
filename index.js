// import express
import express from 'express';
// importa rotas
import {router} from './app/router/route.js';

// inciializar servidor e define porta
let app = express();
let port = 5500;

// utilizar o json
app.use(express.json());

// chama as rotas
app.use('/',router);
app.use('/calc',router);

// mensagem de incialização do servidor
app.listen(port, () => {
    console.log(`Servidor aberto na porta http://localhost:/${port}/`)
});