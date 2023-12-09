// Faça um programa de computador para receber 10 números inteiros e
// depois imprimir seus sucessores.

const io = require('../io/io')

let num = []

for (let i = 0; i < 5; i++){
    io.write(`Digite o ${i + 1}º número: `)
    const numero = io.readInt()
    num.push(numero)
}

for (let i = 0; i < num.length; i++){
    let sucessor = num[i] + 1;
    io.write(`O número sucessor de ${num[i]} é: ${sucessor}`)
}

