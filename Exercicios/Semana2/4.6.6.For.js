//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média
let grades = [10, 7.9, 6.4], sum = 0, avg;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

avg = sum / grades.length;

console.log("Sua media eh", avg);
//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente
let  topics = ['Fundamentos de SI', 'Fundamentos de Programacao', 'Calculo A'];
for (let i = 0; i < grades.length; i++) {
    console.log(topics[i], grades[i]);
}
