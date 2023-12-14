// Faça um programa de computador para contar e imprimir a
// quantidade de divisores que um número natural possui. Este número
// deverá ser fornecido pelo usuário.

let io = require('../io/io')

const contarDivisor = (numero) => {
    let divisores = 0
    for (let i = 1; i <= numero; i++){
        if (numero % i === 0){
            divisores++
        }
    }
    return divisores
}
io.write('Digite um número natural: ')
let num = io.readInt()
divisores = contarDivisor(num)
io.write(`O número ${num} tem ${divisores} divisores`)