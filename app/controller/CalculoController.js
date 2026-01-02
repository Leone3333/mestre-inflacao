// módolos de manipulação de arquivo
import fs from 'fs';
import caminho from 'path';
import { fileURLToPath } from 'url';

// define o caminho raiz para o arquivo json
const __nomeArquivo = fileURLToPath(import.meta.url);
const __nomeDiretorio = caminho.dirname(__nomeArquivo);
const __caminhoArquivo = caminho.join(__nomeDiretorio, "../data/IPCAs.json");

// lê todo o conteudo do json e converte para objeto novamente
const conteudo = fs.readFileSync(__caminhoArquivo, 'utf-8');
const json = JSON.parse(conteudo);

// Admnistra os 2 tipos de calculo, e retorna a resposta
class CalculoController {
    constructor(tipoOperacao, anoCorrespondente, valor) {
        
        // desvalorizar ou valorizar 
        this.tipoOperacao = tipoOperacao;

        // Ano desejado para comparar
        this.anoCorrespondente = Number(anoCorrespondente);

        // valor enviado em texto convertido para numero 
        this.valor = Number(valor.toString().replace(",", "."));

        // Busca o ano atual
        this.anoAtual = new Date().getFullYear();

        // Chave que tem todos array com todos os IPCAs 
        this.ipcas = json.valuesMap;
    }

    // Retorna dados do formulario e do calculo
    getInfos = () => {
        return {
            'TipOperacao': this.tipoOperacao,
            'Valor': this.valor,
            'AnoCorrespondente': this.anoCorrespondente,
            'AnoAtual': this.anoAtual,
            'ipcaAcumulado': this.ipcas[this.anoCorrespondente].fator,
            // 'ipcas': this.ipcas
        }
    }

    // Este método reverte o valor da moeda de hoje em dia para o valor antigo retirando a inflação acumulada  
    // EX: quanto valia 1400 R$ de hoje em 2010?  
    reverter = () => {
        let f = this.fatores();

        let valorAntigo = this.valor/f;
        
        return this.arredondarPor5cents(valorAntigo,2).toFixed(2);
    }

    // Este método atualiza o valor antigo para o valor de hoje aplicando a inflação acumulada
    // EX: 700 R$ 2010 valem aproximadamente quanto hoje em dia?  
    atualizar = () => {
        let f = this.fatores();

        let valorAtual = this.valor*f;

        return this.arredondarPor5cents(valorAtual).toFixed(2);
    }
    
    // Arredonda para o mais próximo com 2 casas decimais
    arredondarPor5cents = (valor) => {return Math.round(valor / 0.05) * 0.05};

    // Calcula o produto dos fatores do ano correspondente até o ano atual
    fatores = () => {
        let fatores = 1;

         for (let ano = this.anoCorrespondente; ano < this.anoAtual; ano++) {
            fatores *= this.ipcas[ano].fator
        }

        return fatores;
    }
}

export { CalculoController };