/*const funcoes = require('./Aula10-FuncoesAuxiliares');

console.log(funcoes);

const pessoa = {
  nome: 'Vitor'
};

const { nome } = pessoa;
const nome = pessoa.nome;*/

//Require importa o que está sendo exportado pelo outro arquivo.
const { gets, print } = require('./Aula10-FuncoesAuxiliares');
print(gets());