//null e undefined são dois valores especiais em JavaScript que indicam a ausência de valor ou a falta de atribuição a uma variável.

//1. undefined:
//O valor undefined é atribuído automaticamente a uma variável que foi declarada, mas não inicializada com um valor. 
//Também é retornado automaticamente por uma função quando não há uma instrução de retorno explícita.

let variavelNaoInicializada;
console.log(variavelNaoInicializada); // undefined

function funcaoSemRetorno() {
  // Não há uma instrução de retorno
}

let resultadoFuncao = funcaoSemRetorno();
console.log(resultadoFuncao); // undefined

//2. null:
//O valor null é atribuído explicitamente para indicar que uma variável não possui valor ou que um objeto não possui uma referência válida.
let variavelNula = null;
console.log(variavelNula); // null

//Diferenças:
//-->Atribuição: <--

//undefined geralmente ocorre automaticamente quando uma variável é declarada, mas não inicializada.
//null é atribuído explicitamente para indicar a ausência de valor.

//--> Retorno de Funções: <--

//Se uma função não possui uma instrução return ou a instrução return não especifica um valor, o retorno será undefined.
//Uma função pode explicitamente retornar null se necessário.

//-->Tipo de Dados: <--

//undefined é um tipo de dado em JavaScript.
//null é um valor primitivo que representa a ausência de um objeto ou valor.

//--> Quando Usar Cada Um: <--
//Use undefined quando uma variável foi declarada, mas ainda não tem um valor atribuído ou quando uma função não tem uma instrução de retorno explícita.

//Use null para indicar que uma variável ou objeto não tem um valor ou uma referência válida.

//Verificando null e undefined:
//Você pode usar operadores de igualdade estrita (=== e !==) para verificar se uma variável é null ou undefined.

let exemplo1 = null;
let exemplo2;

console.log(exemplo1 === null); // true
console.log(exemplo2 === undefined); // true
