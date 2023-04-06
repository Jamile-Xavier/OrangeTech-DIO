//Impressão na tela
console.log('Imprimir algo');

//Declaração de variáveis
//let -> permite alterar o valor posteriormente
let variavel = 10;

//const -> valor constante
const pi = 3.14;

/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível.
2- Gasto médio de combustível do carro por km.
3- Distância em km da viagem.

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = (distanciaEmKm / kmPorLitros) * precoCombustivel;
console.log(litrosConsumidos.toFixed(2));

