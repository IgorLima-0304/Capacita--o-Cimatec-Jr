//Em JavaScript, o tipo de dado booleano (ou simplesmente boolean) é um tipo de dado que representa um valor lógico, ou seja, verdadeiro ou falso.
//O tipo booleano é frequentemente utilizado em estruturas de controle de fluxo, condições e expressões lógicas. As únicas constantes booleanas em JavaScript são true e false.

let isTrue = true;
let isFalse = false;

console.log(isTrue); // true
console.log(isFalse); // false

//Expressões Lógicas:
//O tipo booleano é comumente associado a expressões lógicas que avaliam se uma condição é verdadeira ou falsa.
//Operadores lógicos, como && (AND), || (OR) e ! (NOT), são frequentemente utilizados para criar expressões booleanas.
let idade = 18;
let temPermissao = true;

// Exemplo de expressão lógica com operadores && e ||
let podeDirigir = idade >= 18 && temPermissao;
let podeBeber = idade >= 21 || temPermissao;

console.log(podeDirigir); // true
console.log(podeBeber); // true

//Retorno de Operações Comparativas:
//Operações comparativas, como comparação de igualdade (== ou ===), comparação de desigualdade (!= ou !==), maior que (>), menor que (<), etc., geralmente resultam em valores booleanos.
let numero1 = 5;
let numero2 = 10;

let igual = numero1 === numero2; // Operador de igualdade estrita (===)
let maiorQue = numero1 > numero2;

console.log(igual); // false
console.log(maiorQue); // false

//Uso em Estruturas de Controle de Fluxo:
//Estruturas de controle de fluxo, como if, else, switch, utilizam expressões booleanas para determinar qual caminho de execução deve ser seguido.
let temperatura = 25;

if (temperatura > 30) {
  console.log("Está muito quente!");
} else if (temperatura >= 20 && temperatura <= 30) {
  console.log("A temperatura está agradável.");
} else {
  console.log("Está um pouco frio.");
}

//Tipo Dinâmico:
//JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável pode mudar durante a execução do programa. 
//No entanto, os valores booleanos geralmente são associados a resultados de expressões lógicas e operações de comparação.