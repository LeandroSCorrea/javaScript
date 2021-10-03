console.log("Estou vivo");

var alunos = ["Amanda", "John", "Leandro", "Ramsés", "Victor"];

alunos.forEach(function (aluno, indice) {
    console.log(indice, "índice do aluno")
    console.log(aluno, " alunos");
});

// forma mais nova de foreach
alunos.forEach((aluno) => {
    console.log(aluno, " aluno");
});

//forma de varrer array com map
alunos.map(function (aluno) {
    console.log(aluno, " com array map");
});

// array map =>

var cores = ["vermelho","amarelo","azul","verde"];

cores.map((color) => {
    console.log("Varrendo as cores ",color);
});

cores.forEach(function (color, indice) {
    console.log("Varrendo cores com foreach\n", indice, color);
});

cores.forEach((color) => {
    console.log("Array com forech => ",color);
});
cores.map(function (color) {
    console.log("Array com map function ", color);
});
cores.map((color) => {
    console.log("Varrendo as cores ",color);
});

//exemplo de concatenar
var nome = "Leandro";
var sobrenome = "Corrêa";
console.log(nome + " " + sobrenome);
console.log(`${nome} ${sobrenome}`);