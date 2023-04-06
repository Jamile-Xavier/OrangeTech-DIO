/*Crie uma classe para representar carros.
Os carros possuem marca, cor e gasto de combustível por km.
Crie um método que dado a quantidade de km e o preço do combustível, nos dê o valor em R$ para realização do percurso.*/

class carro {
  marca;
  cor;
  combustivelPorKm;

  constructor(marca, cor, combustivelPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.combustivelPorKm = combustivelPorKm;
  }
  calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.combustivelPorKm * precoCombustivel;
  }

}

const uno = new carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoPercurso(70, 5));

const palio = new carro('Palio', 'Preto', 1 / 10);
console.log(palio.calcularGastoPercurso(70, 5));

/*2-Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC.
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura. Peça ao José para dizer o valor do seu IMC  */

class pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  //método
  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }
  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc <= 25 && imc < 30) {
      return 'Acima do peso';
    } else if (imc <= 30 && imc < 40) {
      return 'Obeso';
    } else {
      return 'Obesidade grave';
    }
  }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

