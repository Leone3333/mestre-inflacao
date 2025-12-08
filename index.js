import express from 'express';
import { CalculoController } from './app/controller/CalculoController.js'; //

let app = express();

let port = 5500;

app.get('/', (req,res) => {
    res.send("Servidor aberto")
});

app.post('/calc', (req,res) =>{
    const r = req.query;

    const calculo = new CalculoController(r.tipoOperacao,r.anoCorrespondente,r.valor)
    
    
    res.send(calculo.getIpcas());
})

app.listen(port, () => {
    console.log(`Servidor aberto na porta http://localhost:/${port}/`)
});