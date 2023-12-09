// Faça um programa que receba do usuário um array de números.
// Implemente uma função que recebe o array de números e retorna um
// outro array que contém somente os números pares.

const io = require('../io/io')

const filtrarPares = (numero) => {
    const numerosPares = []

    for (let i = 0; i < numero.length; i++) {
        if (numero[i] % 2 === 0) {
            numerosPares.push(numero[i])
        }
    }

    return numerosPares
}


const numeros =[] 
const quantidade = 5

for (let i = 0; i < quantidade; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.readInt()
    numeros.push(numero)
}

const pares = filtrarPares(numeros)
io.write(pares)