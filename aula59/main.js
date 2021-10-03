console.log("aula 59");

var coresArray = ['verde','azul','vermelho'];

var coresObjeto = [
    {
        nome: 'Preto',
    },
    {
        nome: 'Branco',
    },
    {
        nome: 'Cinza',
    }
];

console.log("-- Array de cores --");
coresArray.map((arrayCores, indice) => {
    indice++
    console.log(indice + "-" + arrayCores);
});
console.log("-- Array de objeto cores")
coresObjeto.map((objetoCores, indice) => {
    indice++
    console.log(indice + "-" + objetoCores.nome);
});