function calcularPartidasRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso da função
let vitoriasJogador = 30;
let derrotasJogador = 15;

let resultado = calcularPartidasRankeadas(vitoriasJogador, derrotasJogador);
console.log("O Herói tem um saldo de " + resultado.saldoVitorias + " está no nível de " + resultado.nivel);