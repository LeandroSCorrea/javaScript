console.log("Estou em banda js");

var bandas = [
    {
        nome: "Legião Urbana",
        musicas: [
            {
                nome: "Pais e Filhos",
                duracao: 8.52,
                compositores: [
                    {
                        nome: "Renato Russo"
                    },
                    {
                        nome: "Marcelo Bonfá"
                    },
                    {
                        nome: "Dado Vilalobos"
                    },
                ]
            },
            {
                nome:"Tempo perdido",
                duracao: 3.00,
                compositores: [
                    {
                        nome: "Renato Russo",
                    }
                ]
            }
        ],
        integrantes: [
            {
                nome: "Renato Russo",
                salario: 9.5,
                instrumento: "Voz e violão",
            },
            {
                nome: "Eduardo Paraná",
                salario: 4.3,
                instrumento:"Guitarra",
            }
        ],
        instrumentos: [
            {
              nome: 'Guitarra'
            },
            {
              nome: 'Violão'
            }
        ],
        quantidade_de_fans: 50000,
        agenda_de_shows: [
            {
                estado: "DF",
                horario: "18:00",
                local: "Mané Garrincha",
                data: "17/05/2021"
            },
            {
                estado: "RJ",
                horario: "19:00",
                local: "Praia",
                data: "31/12/2021"
            },
        ],
        albuns: [
            {
                nome: "Músicas para acampamento",
                ano: 1992,
            },
            {
                nome: "Que país é esse?",
                ano: 1987,
            },
        ]
    },
    {
        nome: "Eminem",
        musicas: [
            {
                nome: "Purple Pills",
                duracao: 4.0,
                compositores: [
                    {
                        nome: "D-12",
                    },
                    {
                        nome: "Eminem",
                    }
                ]
            },
            {
                nome: "Lose Yourself",
                duracao: 6.32,
                compositores: [
                    {
                        nome: "Eminem"
                    }
                ]
            }
        ],
        integrantes: [
            {
                nome: "Eminem",
                salario: 9.5,
                instrumento: "Voz"
            }
        ],
        instrumentos: [
            {
                nome: "Voz"
            },
            {
                nome: "DJ"
            }
        ],
        quantidade_de_fans: 152964,
        agenda_de_shows: [
            {
                estado: "NY",
                horario: "21:00",
                local: "New York",
                data: "02/08/2023"
            }
        ],
        albuns: [
            {
                nome: "Recovery",
                ano: 2010,
            },
            {
                nome: "Slim Shady",
                ano: 1997,
            }
        ]
    },
    {
        nome: "Maroon 5",
        musicas: [
            {
                nome: "Beautiful Mistakes",
                duracao: 3.37,
                compositores: [
                    {
                        nome: "Adam Noah Levine",
                    },
                    {
                        nome: "Jacob Kasher Hindlin",
                    },
                    {
                        nome: "Andrew Maxwell Goldstein",
                    },
                    {
                        nome: "Matthew Tyler Musto",
                    },
                    {
                        nome: "Joe Kirkla",
                    },
                    {
                        nome: "Megan Jovon Pete"
                    }
                ]
            }
        ],
        integrantes: [
                {
                    nome: "James Valentine",
                    salario: 9.5,
                    instrumento: "Voz"
                },
                {
                    nome: "James Valentine",
                    salario: 9.5,
                    instrumento: "Guitarra solo"
                },
                {
                    nome: "Mickey Madden",
                    salario: 9.5,
                    instrumento: "Baixo Elétrico"
                },
                {
                    nome: "Matt Flynn",
                    salario: 9.5,
                    instrumento: "Voz"
                },
                {
                    nome: "Jesse Carmichael",
                    salario: 9.5,
                    instrumento: "Teclado"
                },
                {
                    nome: "PJ Morton",
                    salario: 9.5,
                    instrumento: "Teclado"
                },
                {
                    nome: "Sam Farrar",
                    salario: 9.5,
                    instrumento: "Baixo Elétrico"
                }
        ],
        instrumentos: [
            {
                nome: "Voz"
            },
            {
                nome: "Guitarra"
            },
            {
                nome: "Baixo elétrico"
            },
            {
                nome: "Teclado"
            }
        ],
        quantidade_de_fans: 3126995497,
        agenda_de_shows: [
            {
                estado: "Los Angeles",
                horario: "21:00",
                local: "New York",
                data: "01/01/2022"
            }
        ],
        albuns: [
            {
                nome: "Jordi",
                ano: 2021,
            },
        ]
    }
]

console.log("-- bandas --");
console.log("Nome das bandas");
bandas.map((banda, indiceBanda) => {
    indiceBanda++
    console.log(indiceBanda + "-" + banda.nome);
    console.log("\tNome das músicas");
    banda.musicas.map((musicaBanda, indiceMusica) => {
        indiceMusica++
        console.log("\t\t" + indiceMusica + "º música");
        console.log("\t\t\tNome: " + musicaBanda.nome);
        console.log("\t\t\tDuração: " + musicaBanda.duracao);
        musicaBanda.compositores.map((compositor, indiceCompositor) => {
            indiceCompositor++
            console.log("\t\t" + indiceCompositor + "º compositor")
            console.log("\t\t\t" + compositor.nome);
        });
    });
    console.log("\tIntegrantes");
    banda.integrantes.map((integrante, indiceIntegrantes) => {
        indiceIntegrantes++
        console.log("\t\t" + indiceIntegrantes + "º Integrante");
        console.log("\t\t\tNome: " + integrante.nome);
        console.log("\t\t\tSalário: " + integrante.salario);
        console.log("\t\t\tInstrumento: " + integrante.instrumento);
    });

    console.log("\tInstrumentos");
    banda.instrumentos.map((instrumentos, indiceInstrumentos) => {
        indiceInstrumentos++
        console.log("\t\t" + indiceInstrumentos + "-" + instrumentos.nome);
    });

    console.log("\tQuantidade de fãs");
    console.log("\t\t\tQuantidade: " + banda.quantidade_de_fans);

    console.log("\tAgenda de shows");
    banda.agenda_de_shows.map((agenda_de_shows, indiceAgenda) => {
        indiceAgenda++
        console.log("\t\t" + indiceAgenda + " show");
        console.log("\t\t\tEstado: " + agenda_de_shows.estado);
        console.log("\t\t\tHorário: " + agenda_de_shows.horario);
        console.log("\t\t\tData: " + agenda_de_shows.data);
        console.log("\t\t\tLocal: " + agenda_de_shows.local);
    });
    
    console.log("\tÁlbuns da Banda")
    banda.albuns.map((albunsBanda, indiceBanda) => {
        indiceBanda++
        console.log("\t\t" + indiceBanda + "º álbum");
        console.log("\t\t\tNome: " + albunsBanda.nome);
        console.log("\t\t\tAno: " + albunsBanda.ano);
    });
});

//nome
//musicas
//integrantes
//instrumentos
//quantidade de fãs
//agenda de shows
//albuns