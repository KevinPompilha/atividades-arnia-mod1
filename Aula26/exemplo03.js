const io = require('../io/io')

// Faça um programa que receba do usuario 3 números e use a função para calcular e retornar a soma dos valores

const somaNumeros = (n1, n2, n3)=> n1 + n2 + n3 
    



io.write('Informe o 1º número')
const numero1 = io.readInt()

io.write('Informe o 2º número')
const numero2 = io.readInt()

io.write('Informe o 3º número')
const numero3 = io.readInt()

const soma = somaNumeros(numero1, numero2, numero3)

io.write(`O resultado dessa soma é: ${soma}`)