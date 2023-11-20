//--> Criação de Função em JavaScript: <--
//A criação de uma função em JavaScript é bastante direta.

// Função simples que retorna a soma de dois números
function somar(a, b) {
    return a + b;
}

// Chamando a função e armazenando o resultado em uma variável
var resultado = somar(3, 5);

// Imprimindo o resultado no console
console.log(resultado); // Saída: 8

//--> Callback em JavaScript sem Operação Assíncrona: <--
//Mesmo sem operações assíncronas, você pode usar callbacks para fornecer funcionalidades personalizadas a partir de uma função.

// Função que executa uma operação e chama o callback com o resultado
function realizarOperacao(a, b, callback) {
    var resultado = a * b;
    // Chamando o callback com o resultado
    callback(resultado);
}

// Função de callback que imprime o resultado
function meuCallback(resultado) {
    console.log("O resultado da operação é: " + resultado);
}

// Chamando a função com os argumentos e o callback
realizarOperacao(4, 6, meuCallback);
