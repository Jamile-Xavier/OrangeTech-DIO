/* 1)- Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre. */


const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log(media + ' ' + 'Reprovado');
} else if (media >= 5 && media < 7) {
  console.log(media + ' ' + 'Recuperação');
} else {
  console.log(media + ' ' + 'Passou de Semestre');
}

/* 2- Calcule o IMC:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade grave;*/

const peso = 60;
const altura = 1.65;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log(imc + ' ' + "Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log(imc + ' ' + "Peso normal");
} else if (imc <= 25 && imc < 30) {
  console.log(imc + ' ' + "Acima do peso");
} else if (imc <= 30 && imc < 40) {
  console.log(imc + ' ' + "Obeso");
} else {
  console.log(imc + ' ' + "Obesidade grave");
}

/*3- Elabore um algoritmo para calcular o que deve ser pago por um produto.
Código condição de pagamento:
- Á vista débito , recebe 10% de desconto;
- Á vista no dinheiro ou pix, recebe 15% de desconto;
- Em 2x, preço normal de etiqueta sem juros;
- Acima de 2x, preço de etiqueta + 10%. */

const valorProduto = 150.00;
const debito = valorProduto - (valorProduto * 0.10);
const dinheiroOuPix = valorProduto - (valorProduto * 0.15);
const credito2x = valorProduto
const creditoAcima2x = valorProduto + (valorProduto * 0.10);
const formaPgto = 'Credito3x'

if (formaPgto === 'Debito') {
  console.log(debito);
} else if (formaPgto === 'DinheiroOuPix') {
  console.log(dinheiroOuPix);
} else if (formaPgto === 'Credito2x') {
  console.log(credito2x);
} else {
  console.log(creditoAcima2x);
}