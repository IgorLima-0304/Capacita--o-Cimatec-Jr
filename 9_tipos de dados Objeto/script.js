//Em JavaScript, o tipo de dado objeto é uma estrutura de dados que permite armazenar e organizar valores de diferentes tipos.
//Os objetos são uma parte fundamental da linguagem, e eles podem representar estruturas mais complexas, como conjuntos de dados e funcionalidades. 

//1. Objetos Literais:
//Um objeto literal é uma forma de criar um objeto de maneira concisa usando chaves {}.

let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'Exemploville',
    saudacao: function() {
      console.log('Olá, meu nome é ' + this.nome + '!');
    }
  };
  
  console.log(pessoa.nome); // 'João'
  pessoa.saudacao(); // 'Olá, meu nome é João!'
  

//2. Arrays:
//Embora tecnicamente sejam do tipo object, os arrays são frequentemente considerados uma categoria separada de objeto. 
//Eles são objetos especiais otimizados para armazenar listas ordenadas de valores.
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[0]); // 'maçã'

//3. Funções:
//As funções em JavaScript são objetos de primeira classe, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.
let soma = function(a, b) {
    return a + b;
  };
  
  console.log(soma(2, 3)); // 5

//4. Objetos Construtores:
//Você pode criar objetos usando funções construtoras, que são chamadas com o operador new.
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
  
  let meuCarro = new Carro('Toyota', 'Corolla');
  console.log(meuCarro.marca); // 'Toyota'
  
//5. Objetos Internos:
//JavaScript possui objetos internos predefinidos que fornecem funcionalidades específicas.

//Object (Objeto):
let obj = new Object();

//Neste exemplo, obj é criado como uma instância do construtor Object. O construtor Object é um dos construtores internos fornecidos pelo JavaScript para criar objetos. 
//No entanto, a maneira mais comum de criar objetos é usando a notação de objeto literal:

//Date:
let hoje = new Date();
//Date é um construtor interno que cria um objeto que representa a data e a hora atuais. Se você chamar console.log(hoje), verá uma representação de data e hora como uma string. 
//Você pode acessar informações específicas sobre a data, como ano, mês, dia, hora, minuto, etc., usando métodos disponíveis no objeto Date.

//RegExp:
let padrao = new RegExp('\\d+');
//RegExp é um construtor que cria um objeto que representa uma expressão regular. 
//No exemplo acima, o padrão \\d+ é uma expressão regular que corresponde a um ou mais dígitos. Essa expressão regular pode então ser usada para realizar correspondências em strings.

//EM RESUMO:
//Object para criar objetos vazios ou como parte da criação de objetos personalizados.
//Date para lidar com datas e horas.
//RegExp para trabalhar com expressões regulares.


//6. Objetos Personalizados:
//Além dos tipos mencionados acima, você pode criar objetos personalizados para atender às necessidades específicas do seu código.
let aluno = {
    nome: 'Maria',
    notas: [90, 85, 95],
    calcularMedia: function() {
      let soma = this.notas.reduce(function(total, nota) {
        return total + nota;
      }, 0);
      return soma / this.notas.length;
    }
  };
  
  console.log(aluno.calcularMedia()); // Média das notas
  