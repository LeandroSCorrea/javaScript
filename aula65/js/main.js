var carnaval = {
    nome: "BrasiL",
    ano: 1500,
};
  
var cerveja = {
    nome: "Alemanha",
    ano: 1871,
};
  
var praias = {
    nome: "Tailândia",
    ano: 2004,
};

var paises = [carnaval, cerveja, praias];

paises.map((itens) => {
    console.log(itens.nome);
});

function imprimeAno(pais){
    pais.map((itens) => {
        if (itens.nome == "BrasiL")
        {
            console.log("--ano--");
            console.log("Seu país (" + itens.nome + ") existe desde " + itens.ano);
        }
    });
}
imprimeAno(paises);