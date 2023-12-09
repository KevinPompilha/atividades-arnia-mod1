// Faça uma função que recebe a idade de um nadador por parâmetro e
// retorna a categoria desse nadador de acordo com a tabela abaixo:

const io = require('../io/io')


function categoriaNadador(idade) {
    if (idade >= 5 && idade <= 7) {
        return 'Infantil A'

    } else if (idade >= 8 && idade <= 10) {
        return 'Infantil B'

    } else if (idade >= 11 && idade <= 13) {
        return 'Juvenil A'

    } else if (idade >= 14 && idade <= 17) {

        return 'Juvenil B'
    
    }else{
        return'Adulto'
    }
}

io.write('Informe a idade do nadador: ')
const idade = io.readInt()

const categoria = categoriaNadador(idade)

io.write(`A categoria do nadador é ${categoria}`)
