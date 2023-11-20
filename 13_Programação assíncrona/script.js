//--> Programação Assíncrona em JavaScript: <--
//A programação assíncrona em JavaScript é fundamental para lidar com operações que podem levar tempo para serem concluídas, como leitura de arquivos, requisições de rede e interações com bancos de dados. Três conceitos importantes relacionados à programação assíncrona em JavaScript são Async/await, Promises e a Fetch API.

//--> Promises: <--
//As Promises são objetos que representam o sucesso ou a falha eventual de uma operação assíncrona. Uma Promise pode estar em um dos três estados: pending (pendente), fulfilled (realizada) ou rejected (rejeitada).

// Exemplo de uma Promise
var minhaPromise = new Promise(function(resolve, reject) {
    // Simulando uma operação assíncrona
    setTimeout(function() {
        var sucesso = true; // Altere para false para simular um erro
        if (sucesso) {
            resolve("Operação bem-sucedida!");
        } else {
            reject("Erro na operação!");
        }
    }, 2000); // Simula um atraso de 2 segundos
});

// Usando a Promise
minhaPromise.then(function(resultado) {
    console.log(resultado);
}).catch(function(erro) {
    console.log(erro);
});


//Async/await:
//O Async/await é uma construção de linguagem introduzida no ECMAScript 2017 (ES8) que facilita a escrita de código assíncrono de forma mais síncrona. 
//O async é usado para criar uma função assíncrona, e o await é usado para esperar que uma Promise seja resolvida.

// Exemplo de Async/await
async function minhaFuncaoAssincrona() {
    try {
        var resultado = await minhaPromise;
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
}

// Chamando a função assíncrona
minhaFuncaoAssincrona();

//Fetch API:
//A Fetch API é uma interface moderna para fazer requisições HTTP e lidar com respostas. Ela retorna Promises, o que a torna compatível com async/await. 
// Exemplo de Fetch API com async/await
async function obterDadosDaAPI() {
    try {
        var resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        var dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.log("Erro ao obter dados da API:", erro);
    }
}

// Chamando a função assíncrona
obterDadosDaAPI();
