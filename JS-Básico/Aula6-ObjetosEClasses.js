/*const jamile = {
  nome: 'Jamile Xavier',
  idade: 30,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';

console.log(jamile.nome);
console.log(jamile.idade);
console.log(jamile);
jamile.altura = 1.65;
delete jamile.nome;
console.log(jamile);*/

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

const jamile = new Pessoa();
jamile.nome = 'Jamile Xavier';
jamile.idade = 30;

jamile.descrever();

console.log(jamile);
//Classe:definição do objeto, instância:ocorrência do objeto.

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);
