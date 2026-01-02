import express from 'express';
import { CalculoController } from '../controller/CalculoController.js'; 

const router = express.Router();

router.get('/', (req,res) => {
    req.session.destroy();
    res.render("home")
});

router.get('/operacao', (req,res) => {
    res.render("operacao")
});

router.post('/tipo', (req,res) => {
     const r = req.body;

     // tipo da operaçao na sessão
     req.session.operacao = r.tipoOperacao;
     
     // tipo da operaçao no localStorage
    //  localStorage.setItem('opStorage', r.tipoOperacao);

     res.render('operacao',{operacao: req.session.operacao});   
});

router.post('/calc', (req,res) => {
    
    // formulario via body
    // const r = req.body;
    
    // Formulario via url
    const r = req.body;

    const calculo = new CalculoController(req.session.operacao,r.ano,r.valor);
    
    // console.log(req.session);
    // console.log(req.session.operacao);
    // console.log(calculo.tipoOperacao);

    if(calculo.tipoOperacao === "atualizar"){
       
        return res.render('resultado', {operacao: calculo.tipoOperacao, resultado: calculo.atualizar(), infos: calculo.getInfos()});
    }
    
    if(calculo.tipoOperacao === "reverter"){
        return res.render('resultado', {operacao: calculo.tipoOperacao, resultado: calculo.reverter(), infos: calculo.getInfos()});
    }

    return res.send(calculo.getInfos());
    
});

export {router};