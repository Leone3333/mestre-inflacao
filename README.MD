# Reais antigos

## Descrição
Um aplicativos que calcula com base no IPCA, o valor aproximado de uma quantia em um ano X

## Funcionamento

### Cálculos 

#### Calculo valorização 
    1º Passo: Recebe o ano e o valor para saber o poder de compra na época

    2º Transforma o IPCA em fator: (PARA CADA ANO DO ESCOLHIDO ATÉ O ATUAL)
        fator = 1 + IPCA%/100

    3º Multiple TODOS os fatores encontrados até o atual:
        todosFatores = (fator1995 * fator1996...fator2025) 

    4º valorAntigo = valorAtual/todosFatores

#### Calculo desvalorização 
    1º Passo: Recebe o ano e o valor para saber o poder de compra na época nos dias de hoje

    2º Transforma o IPCA em fator: (PARA CADA ANO DO ESCOLHIDO ATÉ O ATUAL)
        fator = 1 + IPCA%/100

    3º Multiple TODOS os fatores encontrados até o atual:
        todosFatores = (fator1995 * fator1996...fator2025) 

    4º valorAntigo = valorAtual * todosFatores

### Versões
-- Versão web com node Beta

-- Versão apk com cordova Alfa

## Requisitos Funcionais
    1º Funcionar nas suas respectivas plataformas
    2º Layout funcional e satisfatório
    3º Calcular corretamente com base no IPCA
    4º Ser bem codificado estruturado  
    5º Calcular a valorização da moeda 
    6º Calcular a desvalorização da moeda <- MAIS COMUM 
