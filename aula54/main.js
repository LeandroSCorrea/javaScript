/* console.log("Aula 54");

var pessoa = {
    nome: "Leandro",
    idade: 37,
    profissao: "Estudante",
    linguagens: ["HTML","CSS","Javascript","Bootstrap","ASP.NET Core","JAVA","Linux","MySQL","Postgres"]
};

console.log("---- Dados pessoais do aluno ----");
console.log("Nome do aluno: " + pessoa.nome);
console.log("Idade do aluno: " + pessoa.idade);
console.log("Profissão: " + pessoa.profissao);
pessoa.linguagens.map((cursos) => {
    console.log("Seus cursos matriculados são: " + cursos);
}); */
//console.log("Bem vindo " + `${pessoa.nome}` +"! Boa aula!");


alfabeto.map( (letras) => {
    console.log(letras); 
    curso.map((cursos) => {
        console.log(cursos);
        console.log(letras + "-" + cursos);
    });
});
//var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letras = ["A","B","C","D","E"];
var alunos = ["Amanda", "John", "Leandro", "Ramsés", "Victor"];
letras.forEach(function (letra) {
    console.log(letra);
    alunos.map((aluno) => {
        console.log(aluno);
        //continue;
    });
});