//Criar função
function teste() {
  console.log('Teste');
}

//Chamar a função
teste()

function quadrado(valor) {
  return valor * valor;
}

console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
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

function main() {
  const peso = 60;
  const altura = 1.65;
  const imc = calcularIMC(peso, altura);
  console.log(classificarIMC(imc));
}

main();



