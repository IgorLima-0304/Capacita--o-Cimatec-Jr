//--> Objetos: <--
//Um objeto é uma coleção de propriedades, onde cada propriedade tem um nome (chave) e um valor associado. As propriedades podem ser de qualquer tipo de dado, incluindo outras funções ou objetos.
// Definindo um objeto:
var pessoa = {
    nome: "Igor",
    idade: 21,
    profissao: "Estudante de engenharia de computação",
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e eu sou um " + this.profissao + ".");
    }
};

// Acessando propriedades do objeto:
console.log(pessoa.nome); // Saída: Igor
console.log(pessoa.idade); // Saída: 21

// Chamando o método do objeto
pessoa.saudacao(); // Saída: Olá, meu nome é Igor e eu sou um Estudante de engenharia de computação.

//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Classes:
//Classes são modelos para criar objetos.

// Definindo uma classe
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudacao() {
        console.log("Olá, meu nome é " + this.nome + " e eu sou um " + this.profissao + ".");
    }
}

// Criando uma instância da classe
var pessoa1 = new Pessoa("Igor", 21, "Programador");

// Acessando propriedades e métodos da instância
console.log(pessoa1.nome); // Saída: Igor
console.log(pessoa1.idade); // Saída: 21
pessoa1.saudacao(); // Saída: Olá, meu nome é Igor e eu sou um Programador.

//Destructuring em JavaScript:
//A desestruturação (destructuring) é uma maneira conveniente de extrair valores de arrays ou objetos e atribuí-los a variáveis.

// Desestruturação de um objeto
var pessoa = { nome: "Igor", idade: 21, profissao: "Programador" };

// Extraindo propriedades usando desestruturação
var { nome, idade, profissao } = pessoa;

// Usando as variáveis extraídas
console.log(nome); // Saída: Igor
console.log(idade); // Saída: 21
console.log(profissao); // Saída: Programador