// Faça um programa que receba do usuário um array de números. Faça
// uma função que recebe o array e retorna outro array com os valores em
// ordem invertida. (sem usar o .reverse())
const io = require('../io/io')



const inverterArray = (numeros) =>{
    const novoArray = []
    for(let i= 0; i < numeros.length; i++){
        novoArray.unshift(numeros[i])
    }
    return novoArray
}

const numeros = []
const quantidade = 5

for(let i = 0; i < quantidade; i++){
    io.write(`Digite o ${i + 1}º número`)
    const numero = io.readInt()
    numeros.push(numero)
}
const array = inverterArray(numeros)
io.write(`Os números digitados foram ${numeros}`)
io.write(`E a ordem invertida é ${array}`)
io.write(numeros)



