/*1- Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.
Dados de entrada:
5
50
10
98
23 

Saida: 98

const { gets, print } = require('./Aula11-FuncoesExercícios');

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);*/

const { gets, print } = require('./Aula11-FuncoesExercícios');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

print(maiorValorEncontrado);