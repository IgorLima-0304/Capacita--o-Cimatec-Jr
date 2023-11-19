//Arrays em JavaScript são estruturas de dados que permitem armazenar e organizar elementos sequencialmente. 
//Eles são objetos especiais, com métodos incorporados, //que facilitam a manipulação e iteração sobre conjuntos de dados. 
//Aqui estão alguns conceitos e operações comuns relacionados a arrays em JavaScript:

//1. Declarando um Array:
//Você pode declarar um array usando colchetes [] e atribuir valores a ele.
let frutas = ['maçã', 'banana', 'laranja'];
let numeros = [1, 2, 3, 4, 5];
let misto = ['texto', 42, true];

//2. Acessando Elementos:
//Os elementos de um array são acessados usando índices, que começam em zero.
console.log(frutas[0]); // 'maçã'
console.log(numeros[2]); // 3

//3. Propriedade length:
//A propriedade length retorna o número de elementos em um array.
console.log(frutas.length); // 3

//4. Adicionando e Removendo Elementos:
    //Adicionando no Final:
    frutas.push('uva'); // frutas agora é ['maçã', 'banana', 'laranja', 'uva']

    //Removendo do Final:
    frutas.pop(); // frutas agora é ['maçã', 'banana', 'laranja']

    //Adicionando no Início:
    frutas.unshift('morango'); // frutas agora é ['morango', 'maçã', 'banana', 'laranja']

    //Removendo do Início:
    frutas.shift(); // frutas agora é ['maçã', 'banana', 'laranja']

//5. Iterando sobre um Array:
//Você pode usar loops ou métodos de array para percorrer os elementos.

    //Usando for loop:
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
        }
  
    //Usando forEach (método de array):
    frutas.forEach(function(fruta) {
        console.log(fruta);
      });
      
//6. Métodos de Array:
//JavaScript fornece vários métodos embutidos para manipulação de arrays, como map, filter, reduce, entre outros.
      
    //map:
    let numerosDobrados = numeros.map(function(numero) {
        return numero * 2;
      }); // numerosDobrados agora é [2, 4, 6, 8, 10]

    //filter:
      
    let numerosPares = numeros.filter(function(numero) {
      return numero % 2 === 0;
      }); // numerosPares agora é [2, 4]

    //reduce:
    let soma = numeros.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0); // soma agora é 15
      
      