console.log('aula 64');
/*
Bebê => 0 a 2
Criança => 3 a 11
Adolescente => 12 a 17
Jovem => 18 a 29
Adulto => 30 a 60
Velhinho => 61 pra frente
*/
var jogador = {
  nome: 'Gabriel',
  idade: 15,
  canhoto: true,
};

var zelador = {
  nome: 'Seu Zé',
  idade: 75,
  canhoto: false,
};

var baby = {
  nome: 'Djorkaeff',
  idade: 1,
  canhoto: false,
};

var categorias = [jogador,zelador,baby];
/* categorias.map((categoria) => {
    faixaEtariaDePessoa(categoria);
}); */

function faixaEtariaDePessoa(categoria) {
    categoria.map((pessoa) => {
        if(pessoa.idade >=0 && pessoa.idade <=2)
        {
            alert(pessoa.nome + " você é bebê!")
        }
        if (pessoa.idade >= 3 && pessoa.idade <= 11)
        {
            alert(pessoa.nome + " você é criança!")
        }
        if (pessoa.idade >= 12 && pessoa.idade <= 17)
        {
            alert(pessoa.nome + " você é adolescente!")
        }
        if (pessoa.idade >= 18 && pessoa.idade <= 29)
        {
            alert(pessoa.nome + " você é jovem!")
        }
        if (pessoa.idade >= 30 && pessoa.idade <= 60)
        {
            alert(pessoa.nome + " você é adulto!")
        }
        if (pessoa.idade >= 61)
        {
            alert(pessoa.nome + " você é velhinho!")
        }
    });
}
faixaEtariaDePessoa(categorias);
//faixaEtariaDePessoa(zelador);
//faixaEtariaDePessoa(baby);