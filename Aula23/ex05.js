// Faça um programa de computador que leia números reais maiores que
// zero. Quando for digitado o número zero, o programa deverá apresentar
// os números que foram entrados e a média destes (use while para
// receber os números).

const io = require('../io/io')

let soma = 0
let num
let media
let numeros = []

while (num !== 0) {
    io.write('Digite um número real maior do que 0 (Ou digite 0 para encerrar)')
    num = io.readInt()
    numeros.push(num)
    soma = soma + num

} if (num === 0) {
    media = soma / numeros.length
    io.write(`Os numeros digitados foram: ${numeros}, e a média é ${media}`)
}





