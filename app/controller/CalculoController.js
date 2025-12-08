import fs from 'fs';
import caminho from 'path';
import {fileURLToPath} from 'url';

const __nomeArquivo = fileURLToPath(import.meta.url);
const __nomeDiretorio = caminho.dirname(__nomeArquivo);

const __caminhoArquivo = caminho.join(__nomeDiretorio, "../data/IPCAs.json");

const conteudo = fs.readFileSync(__caminhoArquivo, 'utf-8');

const json = JSON.parse(conteudo);

// Admnistra os 2 tipos de calculo, e retorna a resposta
class CalculoController
{
    constructor(tipoOperacao,anoCorrespondente,valor){
        // 
        this.tipoOperacao = tipoOperacao;
        
        // 
        this.anoCorrespondente = anoCorrespondente;
        
        // 
        this.valor = valor;
        
        // 
        this.anoAtual = new Date().getFullYear();
        
        // 
        this.ipcas = json.valuesMap;
    }

    getIpcas = () => {
        return {
            'TipOperacao': this.tipoOperacao, 
            'Valor': this.valor,
            'AnoCorrespondente': this.anoCorrespondente,
            'AnoAtual': this.anoAtual,
            'ipcaAtual': this.ipcas[this.anoCorrespondente],
            'ipcas': this.ipcas
        }
    }
    
    valorizar = () => {

    }
    
    desvalorizar = () => {

    }   
}

export { CalculoController };