// Faça um programa que receba do usuário um array de números. Faça
// uma função que recebe o array de números e retorna a soma desses
// números. A média deve ser mostrada ao usuário.

const io = require('../io/io')
const somarNumeros = (numeros) => {
    const soma = numeros.reduce((acumulador, elemento) => {
        return acumulador + elemento;
    }, 0)
    return soma

}
const numeros = [7, 5, 15, 2]

const resultado = somarNumeros(numeros)

const calcularMedia = resultado / numeros.length
io.write(`A soma dos valores é ${resultado} e a média é ${calcularMedia}`)

