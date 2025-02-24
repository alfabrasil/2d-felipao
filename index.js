// 2° Desafio DIO do Professor Felipão

function calcularNivel(vitorias, derrotas) {
// Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    //Determinar o nivel com base no saldo de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if ( vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if ( vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"; 
    } else if ( vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if ( vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";    
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;

}

// Test 01
let vitorias = 75;
let derrotas = 20;
let resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);