function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome;
}

escrevaMeuNome('Jamile');

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Jamile') + ' ' + 'Maior de idade');
  } else {
    console.log('Menor de idade');
  }
}

verificarIdade(30);

function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
  return (valor + (valor * juros / 100));
}
const precoEtiqueta = 150.00;
const formaPgto = 'Credito3x'

if (formaPgto === 'Debito') {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaPgto === 'DinheiroOuPix') {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaPgto === 'Credito2x') {
  console.log(precoEtiqueta);
} else {
  console.log(aplicarJuros(precoEtiqueta, 15));
}