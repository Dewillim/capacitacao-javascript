//Faça um condicional para verificar se a nota de calculo deu para passar
let nota = 6.4;
let aprovado;

if(nota >= 6){
    aprovado = true;
} else {
    aprovado = false;
}

console.log(aprovado);
// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais
let reais = 10.25;
if(reais % 1 == 0){
    console.log("nao precisa");
} else {
    console.log('precisa');
}