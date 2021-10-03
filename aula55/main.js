console.log("Aula 55");

var alunos = ["Rodrigo","Ravi","Mary"];

alunos.map((aluno) => {
    console.log(aluno);
});

var carros = [
    {
        modelo: "Parati",
        marca: "Volkswagem",
        ano: 1978
    },
    {
        modelo: "Gol",
        marca: "Volkwagem",
        ano: 2001
    },
    {
        modelo: "Passat",
        marca: "Volkswagem",
        ano: 86,
    }
];

carros.map((carros) => {
    console.log("Modelo: " + carros.modelo + " Marca: " + carros.marca + " ano: " + carros.ano);
});
console.log(carros[1]);

/* 
var letras = ["A","B","C","D","E"];
var alunos = ["Amanda", "John", "Leandro", "Ramsés", "Victor"];
letras.forEach(function (letra) {
    console.log(letra);
    alunos.map((aluno) => {
        console.log(aluno);
        //continue;
    });
}); */