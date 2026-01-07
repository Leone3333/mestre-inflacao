# Mestre inflação

## Descrição
Um aplicativos que calcula com base no IPCA anual, o valor aproximado de uma quantia em um ano X

## Acessar em: 
mestre-inflacao-production.up.railway.apps

## Instalçao local
    
    1º Clone o respositorio: git clone <url-do-repositorio>

    2º Acesse a pasta do projeto: cd MESTRE_INFLACAO

    3º Instale as dependencias para abrir no servidro local: npm install ou npx nodemon index.js

    4º Abra o navegador e acesse: http://localhost:3000
    
## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- EJS (Template Engine)
- JavaScript
- HTML


## Funcionamento

### Cálculos 

#### Atualizar moeda 
    1º Passo: Recebe o ano e o valor para saber o poder de compra na época

    2º Transforma o IPCA em fator: (PARA CADA ANO DO ESCOLHIDO ATÉ O ATUAL)
        fator = 1 + IPCA%/100

    3º Multiple TODOS os fatores encontrados até o atual:
        todosFatores = (fator1995 * fator1996...fator2025) 

    4º valorAntigo = valorAtual/todosFatores

#### Reverter moeda 
    1º Passo: Recebe o ano e o valor para saber o poder de compra na época nos dias de hoje

    2º Transforma o IPCA em fator: (PARA CADA ANO DO ESCOLHIDO ATÉ O ATUAL)
        fator = 1 + IPCA%/100

    3º Multiple TODOS os fatores encontrados até o atual:
        todosFatores = (fator1995 * fator1996...fator2025) 

    4º valorAntigo = valorAtual * todosFatores


## Requisitos Funcionais
    1º Funcionar nas suas respectivas plataformas
    2º Layout funcional e satisfatório
    3º Calcular corretamente com base no IPCA
    4º Ser bem codificado estruturado  
    5º Calcular a valorização da moeda 
    6º Calcular a desvalorização da moeda <- MAIS COMUM 
