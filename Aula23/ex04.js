// Faça um programa de computador para receber 10 nomes de alunos e
// suas respectivas notas e depois imprimir as notas e nomes daqueles que
// obtiveram notas maiores que 7

const io = require('../io/io')
const alunos = []
const notas = []

for (let i = 0; i < 5; i++) {
    io.write(`Informe o nome do ${i + 1}º aluno:`)
    const nome = io.read()
    io.write(`Informe a nota do aluno ${nome}`)
    const nota = io.readFloat()
    alunos.push(nome)
    notas.push(nota)

    // if(nota > 7){
    //     io.write(`O aluno ${alunos[i]} está acima da média e sua nota é: ${notas[i]}`)
    // }
    
}

for(let i = 0; i <notas.length; i++){
    if(notas[i] > 7){
        io.write(`O aluno ${alunos[i]} está acima da média e sua nota é: ${notas[i]}`)
    }
}





