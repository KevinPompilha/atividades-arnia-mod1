// Faça um programa que receba do usuário 20 números e imprima a
// média aritmética desses números

const io = require('../io/io')

let soma = 0
let contador = 0

while(soma <= 20){
    io.write('Digite um número: ')
    //contador =  contador + io.readInt()
    contador += io.readInt()
    soma++
}
const res = contador / 20
io.write(`A média é ${res}`)