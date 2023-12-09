// Escreva uma função que recebe, por parâmetro, dois valores X e Z e
// calcula e retorna Xz

// (X elevado à Z). (sem utilizar funções ou operadores

// de potência prontos)

const io = require('../io/io')

function potencia(x, z) {

    let resultado = 1

    for (let i = 0; i < z; i++) {

        resultado *= x

    }

    return resultado
}

io.write('Escreva o primeiro número: ')
const num1 = io.readInt()

io.write('Escreva o segundo número: ')
const num2 = io.readInt()



const resultado = potencia(num1, num2)
io.write(`A potência de ${num1} elevado a ${num2} é: ${resultado}`)