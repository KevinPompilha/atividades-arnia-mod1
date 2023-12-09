const io = require('../io/io')

function somaNumeros(n1, n2){
    const somaDosNumeros = n1 + n2
    
    return somaDosNumeros
}



io.write('--- Soma de 2 números ---')
io.write('Informe o 1º número')
const num1 = io.readInt()

io.write('Informe o 2º número')
const num2 = io.readInt()

const soma = somaNumeros(num1, num2) 

// const soma = num1 + num2 // Imagine uma operção mais complexa

io.write(`A soma dos números é ${soma}`)