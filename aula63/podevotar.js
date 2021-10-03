console.log("Aula 63");
console.log("--Votação ");

/* var pessoa1 = 3;
var pessoa2 = 16;
var pessoa3 = 18; */

var pessoa1 = {
    nome: "Ravi",
    idade: 15,
};
var pessoa2 = {
    nome: "Rodrigo",
    idade: 21,
}

var pessoas = [pessoa1, pessoa2];

function votar(pessoa) {
    
    if(pessoa.idade >= 18 && pessoa.idade <= 70){
        //var pessoa1 = 3;
        alert(pessoa.nome + " você deve votar!");
    }
    else if(pessoa.idade >= 16 && pessoa.idade < 18){
        //var pessoa2 = 16;
        alert(pessoa.nome + " você pode votar!");
    }
    else {
        //var pessoa3 = 18;
        alert(pessoa.nome + " você não pode votar!");
    }
}

votar(pessoas);
//votar(pessoa2);
//votar(pessoa3,"Leandro")
