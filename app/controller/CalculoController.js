import fs from 'fs';
import caminho from 'path';
import { fileURLToPath } from 'url';

const __nomeArquivo = fileURLToPath(import.meta.url);
const __nomeDiretorio = caminho.dirname(__nomeArquivo);

const __caminhoArquivo = caminho.join(__nomeDiretorio, "../data/IPCAs.json");

const conteudo = fs.readFileSync(__caminhoArquivo, 'utf-8');

const json = JSON.parse(conteudo);

// Admnistra os 2 tipos de calculo, e retorna a resposta
class CalculoController {
    constructor(tipoOperacao, anoCorrespondente, valor) {
        // 
        this.tipoOperacao = tipoOperacao;

        // 
        this.anoCorrespondente = Number(anoCorrespondente);

        // 
        this.valor = Number(valor.toString().replace(",", "."));

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
            'ipcaAtual': this.ipcas[this.anoCorrespondente].fator,
            // 'ipcas': this.ipcas
        }
    }

    // Este método calcula o quanto a moeda vai valorizando ao voltar no tempo
    // EX: quanto valia 1400 R$ de hoje em 2010?  
    valorizar = () => {
        let f = this.fatores();

        let valorAntigo = this.valor/f;
        
        return {"Valor antigo":valorAntigo.toFixed(2)};
    }

    // Este método calcula o quanto a moeda vai desvalorizando com o passar do tempo
    // EX: 700 R$ 2010 valem aproximadamente quanto hoje em dia?  
    desvalorizar = () => {
        let f = this.fatores();

        let valorAtual = this.valor*f;

        return {"Valor atual":valorAtual.toFixed(2)};

    }

    fatores = () => {
        let fatores = 1;

         for (let ano = this.anoCorrespondente; ano < this.anoAtual; ano++) {
            fatores *= this.ipcas[ano].fator
        }

        return fatores;
    }
}

export { CalculoController };