// Faça um programa para pedir 10 nomes de pessoas ao
// usuário e acusar quantas se chamam “Maria”

const io = require('../io/io')

let contadormaria = 0

for (let i = 0; i < 10; i++){
    io.write(`Digite o nome da ${i + 1}ª pessoa: `)
    const nome = io.read()
    
    if (nome.toLowerCase() === 'maria'){
        contadormaria++
    }
}

io.write(`O número de pessoas chamadas 'Maria' é: ${contadormaria}`)