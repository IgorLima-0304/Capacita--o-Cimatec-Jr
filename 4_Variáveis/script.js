var teste = 1;

var nome = "Igor"; //Adicionar var sempre que declarar variável

console.log(teste);

teste = 'Matheus';

console.log(teste);

console.log(nome);

var $nome = 'ASD'; // os unicos caracteres especiais que podeme ser
var _nome = 'ASD2';// declarados em variaveis var são $ e _

console.log($nome);
console.log(_nome);

var nome5 = 'ASD3';

console.log(nome5);

var meuPrimeiroNome = 'Igor';

console.log(meuPrimeiroNome); 

var meusobrenome = "Lima";

console.log(meusobrenome);

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var meuNome;

console.log(meuNome);

meuNome = "Igor";

console.log(meuNome);

//Em JavaScript, você pode declarar variáveis usando as palavras-chave var, let ou const. 
//A escolha entre elas depende do escopo e da mutabilidade desejados.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//O que é escopo?
//-->O escopo em programação se refere à região do código onde uma determinada variável é válida e pode ser acessada. 
//Em outras palavras, o escopo define a visibilidade e a acessibilidade de uma variável em diferentes partes do programa. 
//Existem dois principais tipos de escopo em JavaScript:</ 

//Escopo Global:
//Variáveis declaradas fora de qualquer função ou bloco de código têm escopo global.
//Elas podem ser acessadas de qualquer lugar no código, incluindo dentro de funções e blocos.
//Variáveis globais são declaradas sem a palavra-chave var, let ou const.

var globalVar = "Eu sou uma variável global";

//Escopo Local:
//Variáveis declaradas dentro de uma função ou bloco de código têm escopo local.
//Elas só podem ser acessadas dentro da função ou bloco em que foram declaradas.
//Variáveis declaradas com var têm escopo de função, enquanto let e const têm escopo de bloco.

function exemploEscopo() {
    let localVar = "Eu sou uma variável local";
    console.log(localVar); // Acesso permitido dentro da função.
  }
  // console.log(localVar); // Isso resultaria em um erro, pois localVar não está acessível aqui.
  

function exemploEscopoVar() {
if (true) {
    var localVarVar = "Eu sou uma variável local com var";
    console.log(localVarVar); // Acesso permitido dentro do bloco.
}
    console.log(localVarVar); // Acesso permitido fora do bloco (hoisting).
 }
  
//var nome = "João";
//let idade = 25;
//const Pi = 3.14;

