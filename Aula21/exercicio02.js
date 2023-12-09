// Faça um programa de computador que receba do usuário três tamanhos
// de segmentos de reta em ordem aleatória e acuse se estes segmentos
// formam ou não os lados de um triângulo. Para isso, um lado deve ser
// sempre menor que a soma dos outros dois lados.

const io = require('../io/io')

io.write('Informe o primeiro número: ')
const num1 = io.readInt()

io.write('Informe o segundo número: ')
const num2 = io.readInt()

io.write('Informe o terceiro número: ')
const num3 = io.readInt()

if (num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2){
    io.write(`Os números ${num1}, ${num2} e ${num3} formam um triângulo`)
}else{
    io.write('Não formam um triângulo')
}