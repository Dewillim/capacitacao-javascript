//Exercício de Destructuring em JavaScript

//1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

//a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.
let a, b, c;
a = numbers[0];
b = numbers[1];
c = numbers[2];

//b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.
let d;
d = [numbers[3], numbers[4]];

//2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

//a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.
person.name = 'John';
person.age = 30;
person.city = 'New York'

//b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.
let PersonResume = [person.name, person.age];