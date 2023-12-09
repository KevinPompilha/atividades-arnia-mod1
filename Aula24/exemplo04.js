const io = require('../io/io')

// Faça um programa para calcular a média de 3 notas de um determinado aluno.
// Este programa deverá conter uma função que recebe as 3 notas de um aluno por
// parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética
// das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função
// deverá retornar o valor da média calculada.

function calcularMedia(n1, n2, n3, tipoMedia) {
    if (tipoMedia === 'A') {
        const mediaAritmetica = (n1 + n2 + n3) / 3
        io.write(`Média de notas: ${mediaAritmetica}`)
    } else if (tipoMedia === 'P') {
        const mediaPondereada = ((n1 * 5) + (n2 * 3) + (n3 * 2)) / 10
        io.write(`A média ponderada é: ${mediaPondereada}`)
    } else {
        io.write('Informe o tipo corretamente')
    }

}


io.write('Informe a 1ª nota')
const nota1 = io.readFloat() //5

io.write('Informe a 2ª nota')// 3
const nota2 = io.readFloat()

io.write('Informe a 3ª nota')
const nota3 = io.readFloat() //2

io.write('Tipo de média')
const tipo = io.read()


calcularMedia(nota1, nota2, nota3, tipo)

