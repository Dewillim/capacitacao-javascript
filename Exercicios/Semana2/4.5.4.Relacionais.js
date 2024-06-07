//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

function pessoa(name, age, height) {
    this.nome = name;
    this.idade = age;
    this.altura = height;
}

let Pessoa1 = new pessoa('David', 21, 1.71);
let Pessoa2 = new pessoa('Daniel', 17, 1.71);

console.log(Pessoa1.nome === Pessoa2.nome ? true : false);
console.log(Pessoa1.idade >= Pessoa2.idade ? true : false);
console.log(Pessoa1.altura <= Pessoa2.altura ? true : false);