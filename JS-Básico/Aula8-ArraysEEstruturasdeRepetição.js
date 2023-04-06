// [] representa lista
const alunos = ['João', 'Vitor', 'Marina'];
//inicia no 0.
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//adicionar na lista
alunos.push('Renan');
alunos[4] = 'Vinícius';
console.log(alunos);

//substituir
alunos[3] = 'Vinicius'
console.log(alunos);

console.log(alunos.pop());
console.log(alunos.shift());

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(3);
notas.push(5);
notas.push(8);

//Dessa forma se eu add itens a lista não vai alterar a soma automaticamente.
const soma1 = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(notas.length);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);

