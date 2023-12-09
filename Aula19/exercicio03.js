// Faça um programa de computador que receba do usuário três tamanhos
// de segmentos de reta e acuse se estes segmentos formam ou não os
// lados de um triângulo. Para formar um triângulo o maior segmento deve
// ser menor que a soma dos outros dois. Suponha que o maior lado sempre
// será digitado primeiro.

const io = require('../io/io')

io.write('Informe o primeiro número: ')
const num1 = io.readInt()

io.write('Informe o segundo número: ')
const num2 = io.readInt()

io.write('Informe o terceiro número: ')
const num3 = io.readInt()

if (num1 < num2 + num3 && num2 < num1 + num3 && num3 < num1 + num2){
    io.write(`Os números ${num1}, ${num2}, ${num3} formam um triângulo`)
} else{
    io.write('Não formam um triângulo')
}