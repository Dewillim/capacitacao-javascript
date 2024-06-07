//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.
num = -20;
if(num % 2 == 0 & num > 0){
    console.log("O numero eh positivo e par");
} else {
    console.log("O numero nao eh positivo e par");
}
//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.
num2 = -20;
if(num2 % 2 == 0 || num2 > 0){
    console.log("O numero eh positivo ou par");
} else {
    console.log("O numero nao eh positivo ou par");
}

//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.
if(num == num2){
    console.log("Os numeros sao iguais");
} else {
    console.log("Os numeros sao diferentes");
}