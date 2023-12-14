class Pessoa{
    id
    cpf
    nome
    anoNascimento
    idade


    constructor(id, cpf, nome, ano, idade){
        this.id = id
        this.cpf = cpf
        this.nome = nome
        this.anoNascimento = ano
        this.idade = 2023 - this.anoNascimento
        
    }
}

const pessoa = new Pessoa(3,'12345678911', 'Beltrano', 1990)

console.log(pessoa)

const pessoaX = new Pessoa(4,'456456456456', 'Teste', 1977)

console.log(pessoaX)

