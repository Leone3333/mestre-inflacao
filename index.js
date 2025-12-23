// import express e session
import express from 'express';
import session from 'express-session';

// importa rotas
import {router} from './app/router/route.js';

// módolos de manipulação de arquivo
import caminho from 'path';
import { fileURLToPath } from 'url';

// inciializar servidor e define porta
let app = express();
let port = 5500;

const __nommeArquivo = fileURLToPath(import.meta.url); //retorna o nome do arquivo em que se encontra
const __diretorio =  caminho.dirname(__nommeArquivo); //retorna o diretorio que se encontra

const caminhoPublic = caminho.join(__diretorio, 'public'); //retorna o diretorio da pasta public
const caminhoViews = caminho.join(__diretorio, 'views'); //retorna o diretorio da pasta viwes

// configuração do express para lidar com session
app.use(session({secret:'segredo',resave:false,saveUninitialized:true}));

// configuração do express para lidar com formulários urlencoded
app.use(express.urlencoded({ extended: true }));

// utilizar o json
app.use(express.json());

// encontrar pastas dentro de diretorio public
app.use(express.static(caminhoPublic));

// define onde deve encontrar os arquivos ejs
app.set('views', caminhoViews);
app.set('view engine', 'ejs');


// chama as rotas
app.use('/',router);
app.use('/operacao',router);
app.use('/calc',router);

// mensagem de incialização do servidor
app.listen(port, () => {
    console.log(`Servidor aberto na porta http://localhost:/${port}/`)
});