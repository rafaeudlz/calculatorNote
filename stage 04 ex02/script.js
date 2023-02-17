/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

let student1 = {
  name: "Rafael",
  firstNote: 7,
  secondNote: 5,
}

let student2 = {
  name: "Leonardo",
  firstNote: 7,
  secondNote: 8,
}

let student3 = {
  name: "Maria",
  firstNote: 10,
  secondNote: 6,
}

let student4 = {
  name: "Douglas",
  firstNote: 7,
  secondNote: 8,
}

average1 = (Number(student1.firstNote) + Number(student1.secondNote)) / 2
average2 = (Number(student2.firstNote) + Number(student2.secondNote)) / 2
average3 = (Number(student3.firstNote) + Number(student3.secondNote)) / 2
average4 = (Number(student4.firstNote) + Number(student4.secondNote)) / 2

if(average1 > 7) {
  alert("Parabéns " + student1.name + " sua média foi: " + average1 + " você está aprovado(a).")
} else {
  alert("Não foi dessa vez " + student1.name + ", sua média foi: " + average1 + ". Tente novamente.")
}

if(average2 > 7) {
  alert("Parabéns " + student2.name + " sua média foi: " + average2 + " você está aprovado(a).")
} else {
  alert("Não foi dessa vez " + student2.name + ", sua média foi: " + average2 + ". Tente novamente.")
}

if(average3 > 7) {
  alert("Parabéns " + student3.name + " sua média foi: " + average3 + " você está aprovado(a).")
} else {
  alert("Não foi dessa vez " + student3.name + ", sua média foi: " + average3 + ". Tente novamente.")
}

if(average4 > 7) {
  alert("Parabéns " + student4.name + " sua média foi: " + average4 + " você está aprovado(a).")
} else {
  alert("Não foi dessa vez " + student4.name + ", sua média foi: " + average4+ ". Tente novamente.")
}