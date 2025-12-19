import express from 'express';
import { CalculoController } from '../controller/CalculoController.js'; 

const router = express.Router();

router.get('/', (req,res) => {
    res.send("Servidor aberto")
});

// router.get('/operacao', (req,res) => {
//     res.render("operacao")
// });

router.post('/calc', (req,res) =>{
    
    // formulario via body
    // const r = req.body;
    
    // Formulario via url
    const r = req.query;
    
    let msg = "Erro no tipo de operação";

    const calculo = new CalculoController(r.tipoOperacao,r.anoCorrespondente,r.valor);
    
    if(r.tipoOperacao === "valorizar"){
        return res.render('operacao', {operacao: r.tipoOperacao, resultado: calculo.valorizar()});
    }
    
    if(r.tipoOperacao === "desvalorizar"){
        // console.log(calculo.desvalorizar());
        return res.render('operacao', {operacao: r.tipoOperacao, resultado: calculo.desvalorizar()});
    }else{
        return res.send(calculo.getIpcas());
    }

    return res.status(400).send("Erro na requisição");
});

export {router};