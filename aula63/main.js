console.log("Aula 63");
console.log(" ");

function mostrarNumero(numero) {
    var restoDaDvivisao = numero % 2;
    
    if(restoDaDvivisao == 0){
        alert("Este número é par");
    }
    else{
        alert("Este número é impar");
    }
}

mostrarNumero(20);
mostrarNumero(15);
