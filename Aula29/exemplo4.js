const io = require('../io/io')

class Pessoa {
    id
    nome
    
}

const pessoas = []

io.write('Cadastro de Pessoas')
for (let i = 0; i < 3; i++){
    io.write(`Informe o ${i + 1}º id:`)
    const id = io.readInt()
    
    io.write(`Informe o ${i + 1}º nome: `)
    const nome = io.read()

    const pessoa = new Pessoa()
    pessoa.id = id
    pessoa.nome = nome

    pessoas.push()
}

pessoas.forEach(pessoa =>{
    io.write(`${pessoa.id} - ${pessoa.nome}`)
})

