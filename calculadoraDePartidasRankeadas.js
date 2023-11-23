function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

let saldo = saldoVitorias(200,0)
nivel = ""

if (saldo <= 10){
    nivel = "Ferro"
}
else if(saldo <= 20){
    nivel = "Bronze"
}
else if (saldo <= 50){
    nivel = "Prata"
}
else if (saldo <= 80){
    nivel = "Ouro"
}
else if (saldo <= 90){
    nivel = "Diamante"
}
else if (saldo <= 100){
    nivel = "Lendário"
}
else if (saldo > 100){
    nivel = "Imortal"
}


console.log(`O Herói tem o saldo de ${saldo} vitórias e está no nível de ${nivel}.`)