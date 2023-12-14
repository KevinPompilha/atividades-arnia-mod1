// Faça um programa que peça ao usuário um número natural e
// imprima seus divisores. Divisores de 10: números menores ou iguais à 10 pelos quais 10 se
// divide de forma exata (com resto igual a 0) ■ 1, 2, 5, 10

let io = require('../io/io')

function encontrarDivisores(numero) {
    let divisores = []
    for (let i = 1; i <= numero; i++){
        if (numero % i === 0){
            divisores.push(i)
        }
    }
    return divisores
}
io.write('Digite um valor natural: ')
let num = io.readInt()
let divisores = encontrarDivisores(num)
io.write(`O divisor de ${num} é ${divisores}`)
