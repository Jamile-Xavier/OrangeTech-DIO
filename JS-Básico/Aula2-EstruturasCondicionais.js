const numero = 10;
const isnumeroPar = (numero % 2) === 0;
console.log(isnumeroPar);

if (isnumeroPar) {
  console.log('Par');
} else {
  console.log('Impar');
}

const numero1 = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;
if (numero === 0) {
  console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
  console.log('Sim');
} else {
  console.log('Não');
}

/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do etanol.
2- Preço da gasolina.
3- O tipo de combustivel que esta no seu carro.
4- Gasto médio de combustível do carro por km.
5- Distância em km da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustível = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustível === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}

