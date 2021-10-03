var sucos = ['Uva', 'Laranja', 'Acerola', 'Limão'];
var linguagens = ['PHP', 'JAVASCRIPT', 'Python', 'GO'];

console.log("Lista de sucos sem função");
sucos.map((suco) => {
    console.log("\t" + suco);
});
console.log("Lista de Linsguagens sem função");
linguagens.map((linguagem) => {
    console.log("\t" + linguagem);
});

function imprimirTudo(meuArray, titulo){
    console.log(titulo);
    meuArray.map((lista) => {
        console.log("\t" + lista);
    });
    console.log(" ");
}
console.log("Listas Usando Função");
imprimirTudo(sucos, "Lista de sucos");
imprimirTudo(linguagens, "Lista de linguagens");