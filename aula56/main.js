var pessoas = [
    {
        nome: "Leandro",
        idade: 37,
        filhos: [
            {
                nome:"Miguel",
                idade: 3,
                hobbies: ["Correr","Pula-pula","Ir no parquinho"]
            },
            {
                nome: "Maria Eduarda",
                idade: 16,
                hobbies: ["Dormir","Celular","Comer","Estudar"]
            }
        ]
    },
    {
        nome: "Raimunda",
        idade: 68,
        filhos: [
            {
                nome: "Fernando",
                idade: 38,
                hobbies: ["jiu-jitsu","Malhar"]
            },
            {
                nome: "Leandro",
                idade:37,
                hobbies: ["Estudar","Correr","Pedalar"]
            }
        ]
    }
]

console.log("// Dados das Pessoas")
// Mapeado o array "pessoas"
pessoas.map((pessoa, indice) => {
    // Incrementar mais 1 no indice do array
    // Para não começar com zero
    indice+=1
    console.log("-- Pessoa n° " + indice + " --")
    // Imprimindo a propriedade "nome" do objeto "pessoa"
    console.log("\tNome: " + pessoa.nome)
    console.log("\tIdade da pessoa: " + pessoa.idade)
    console.log("\tFilhos:")
    // Mapiei a propriedade "filhos" do objeto "pessoa"
    pessoa.filhos.map((filho,indiceFilho) => {
        // Incremento do "indiceFilho" para não começar com zero
        indiceFilho+=1
        console.log("\t\t" + indiceFilho + " Nome: " + filho.nome)
        console.log("\t\tHobbies:")
        // Mapiei a propridade "Hobbies" do objeto "Filhos"
        filho.hobbies.map((hobbie, indiceHobbie) => {
            // Incremento do "indiceHobbie" para não começar com zero
            indiceHobbie++
            console.log("\t\t\t" + indiceHobbie + " "+ hobbie)
        })
        console.log("\t\tIdade: " + filho.idade)
    })
    console.log("\tIdade da pessoa: " + pessoa.idade)
});