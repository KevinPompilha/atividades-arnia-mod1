const io = require('../io/io')

//Faça um programa que receba dos números e imprima a diferença de um pelo outro

io.write('Digite o primeiro número: ')
const numero1 =  io.readInt()

io.write('Digite o segundo número: ')
const numero2 = io.readInt()

const resultado = numero1 - numero2
io.write(`A diferença entre ${numero1} e ${numero2} é: ${resultado}`)

// io.write('Digite o primeiro número: ')
// const numero1 =  io.readFloat()

// io.write('Digite o segundo número: ')
// const numero2 = io.readFloat()

// const resultado = numero1 - numero2
// io.write(`A diferença entre ${numero1} e ${numero2} é: ${resultado}`)