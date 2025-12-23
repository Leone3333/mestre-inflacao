import express from 'express';
import { CalculoController } from '../controller/CalculoController.js'; 

const router = express.Router();

router.get('/', (req,res) => {
    res.render("home")
});

// router.get('/operacao', (req,res) => {
//     res.render("operacao")
// });

router.post('/tipo', (req,res) =>{
     const r = req.body;

     console.log(r);
     req.session.operacaoSess = r.tipoOperacao;

     res.render('operacao',{operacaoSess: req.session.operacaoSess});   
});

// router.post('/calc', (req,res) =>{
    
//     // formulario via body
//     // const r = req.body;
    
//     // Formulario via url
//     const r = req.query;

//     const calculo = new CalculoController(r.tipoOperacao,r.anoCorrespondente,r.valor);
    
//     if(r.tipoOperacao === "atualizar"){
//         return res.render('operacao', {operacao: r.tipoOperacao, resultado: calculo.atualizar()});
//     }
    
//     if(r.tipoOperacao === "reverter"){
//         return res.render('operacao', {operacao: r.tipoOperacao, resultado: calculo.reverter()});
//     }else{
//         return res.send(calculo.getIpcas());
//     }

//     return res.status(400).send("Erro na requisição");
// });

export {router};