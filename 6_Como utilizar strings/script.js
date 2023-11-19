//Strings são utilizadas para representar e manipular texto. Aqui estão algumas operações comuns que você pode realizar com strings:

//1. Declarando Strings:
//Você pode criar strings utilizando aspas simples (') ou duplas (").
let str1 = 'Isso é uma string com aspas simples.';
let str2 = "Isso é uma string com aspas duplas.";

//2. Concatenação:
//Você pode concatenar strings utilizando o operador + ou o método concat().
let firstName = 'Igor';
let lastName = 'Lima';

let fullName = firstName + ' ' + lastName; // Utilizando o operador +
let fullNameConcat = firstName.concat(' ', lastName); // Utilizando o método concat()

console.log(fullName); // 'Igor Lima'
console.log(fullNameConcat); // 'Igor Lima'


//3. Interpolação de Strings (Template Strings):

let name = 'Alice';
let age = 30;

let info = `A pessoa é ${name} e ela tem ${age} anos.`; // 'A pessoa é Alice e ela tem 30 anos.'

console.log(info); 

//4. Acessando Caracteres:
//Você pode acessar caracteres individuais em uma string utilizando colchetes []. Lembre-se de que os índices em JavaScript começam em zero.

let myString = 'Hello, World!';
console.log(myString[0]); // 'H'
console.log(myString[7]); // 'W'

// 5. Métodos de String:
// JavaScript fornece vários métodos para manipular strings. Aqui estão alguns exemplos:

// a. length:
// Retorna o comprimento da string.

let text = 'Hello, World!';
console.log(text.length); // 13

//b. toLowerCase() e toUpperCase():
//Convertem uma string para minúsculas ou maiúsculas.

let text2 = 'HELLO, WORLD!';
console.log(text2.toLowerCase()); // 'hello, world!'
console.log(text2.toUpperCase()); // 'HELLO, WORLD!'

//c. indexOf() e lastIndexOf():
//Retornam a posição do primeiro ou último caractere específico em uma string.

let text = 'Hello, World!';
console.log(text.indexOf('o')); // 4
console.log(text.lastIndexOf('o')); // 8

//d. substring() e slice():
//Retornam uma parte da string.

let text = 'Hello, World!';
console.log(text.substring(0, 5)); // 'Hello'
console.log(text.slice(7)); // 'World!'

//6. Modificação de Strings:
//Strings em JavaScript são imutáveis, o que significa que não podem ser alteradas diretamente. No entanto, você pode criar uma nova string com as modificações desejadas.

let originalString = 'Hello, World!';
let modifiedString = originalString.replace('Hello', 'Hi');

console.log(originalString); // 'Hello, World!'
console.log(modifiedString); // 'Hi, World!'
