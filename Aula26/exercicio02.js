// Faça um programa que receba do usuário um array de números. Faça
// uma função que recebe o array de números e retorna a soma desses
// números. A soma deve ser mostrada ao usuário.

const io = require('../io/io')

const somarNumeros = (numeros) => {
    const soma = numeros.reduce((acumulador, elemento) =>{
        return acumulador + elemento
    }, 0)
    
    return soma
}
const numeros = [5, 10, 6, 8]

const resultado = somarNumeros(numeros)
io.write(`A soma dos números é ${resultado}`)


