class Pessoa {
    id
    nome
    cpf
    anoNascimento

    calcularIdade(){
        const calculo = 2023 - this.anoNascimento
        return calculo
    }
}

const pessoa1 = new Pessoa()
pessoa1.id = 1
pessoa1.nome = 'Kevin'
pessoa1.cpf = '123.456.789-1'
pessoa1.anoNascimento = '1990'

const idadePessoa1 = pessoa1.calcularIdade()

console.log(pessoa1)

const pessoa2 = new Pessoa()
pessoa2.id = 2
pessoa2.nome = 'Jéssica'
pessoa2.anoNascimento = '1995'
pessoa2.cpf = '123.456.782-1'
const idadePessoa2 = pessoa2.calcularIdade()

console.log(pessoa1, pessoa2)