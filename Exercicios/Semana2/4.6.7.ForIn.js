//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria
let topics = ['Fundamentos de SI', 'Fundamentos de Programacao', 'Calculo A'];

for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}
//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota
let academic = {
    topics: ['Fundamentos de SI', 'Fundamentos de Programacao', 'Calculo A'],
    grades: [10, 7.9, 6.4]
}

for (let i = 0; i < academic.topics.length; i++) {
    console.log(academic.topics[i], academic.grades[i]);
}